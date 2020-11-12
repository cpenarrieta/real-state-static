import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import PropertyPage from "../../components/property/index";
import Head from "next/head";
import { parseISO } from "date-fns";

const formatData = (propertyOpenHouse) => {
  return propertyOpenHouse?.map((o) => {
    return {
      id: o.id,
      date: parseISO(o.date),
      start: parseISO(`2014-02-11T${o.timeStart}`),
      end: parseISO(`2014-02-11T${o.timeEnd}`),
    };
  });
};

export default function Property({
  error,
  property,
  otherProperties,
  attachments,
  images,
  openHouse,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Properety Loading......I'm sorry for the wait!!</div>;
  }

  useEffect(() => {
    async function visitorFunction() {
      const { uuid, username } = router.query;
      try {
        await axios.post("/api/visitor", {
          uuid,
          username,
          type: "PROPERTY",
        });
      } catch (e) {
        // ERROR send to Bugsnag
      }
    }
    visitorFunction();
  }, []);

  const { username, uuid } = router.query;

  if (error) {
    return (
      <div>
        <h4>Property not Found</h4>
        <Link href={`/${username}`}>
          <a>Agent page</a>
        </Link>
      </div>
    );
  }

  let seoDescription =
    "Property for Sale. Check open house hours or contact us.";
  let seoTitle = "Property for Sale | Realtor App";

  if (
    property.address1 &&
    property.city &&
    property.propertyType &&
    property.status &&
    property.bedrooms &&
    property.bathrooms &&
    property.lotSize
  ) {
    seoDescription = `${property.address1}, ${property.city}, ${property.province}. ${property.propertyType} for sale. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms and ${property.lotSize} sqft. Check open house hours or contact us.`;
    seoTitle = `${property.address1}, ${property.city}, ${property.province}. ${property.propertyType} for sale.`;
  }

  const headComp = (
    <Head>
      <title>{seoTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/logo_icon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/180.png" />
      <link rel="icon" type="image/png" sizes="196x196" href="/196.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/32.png" />
      <link rel="icon" type="image/png" sizes="88x88" href="/88.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/16.png" />
      <meta name="msapplication-TileImage" content="/144.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#F77E93" />
      <meta name="theme-color" content="#F77E93" />
      <meta name="description" content={seoDescription}></meta>
      {images &&
        images.length &&
        images.map((i) => (
          <meta
            key={i.urlLowRes}
            content={i.urlLowRes}
            property="og:image"
            alt="Realtor App property"
          ></meta>
        ))}
      <meta content={seoTitle} property="og:title" />
      <meta content={seoDescription} property="og:description"></meta>
      <meta
        content={`https://realtorapp.co/${username}/${uuid}`}
        property="og:url"
      ></meta>
      <meta content={process.env.FACEBOOK_APP_ID} property="fb:app_id"></meta>
      <meta
        content="https://res.cloudinary.com/real-state-app/image/upload/v1604048527/real-state-app/Original.png"
        alt="Realtor App logo"
        property="og:image"
      ></meta>
      <link
        href={`https://realtorapp.co/${username}/${uuid}`}
        rel="canonical"
      ></link>
      <meta content="website" property="og:type"></meta>
    </Head>
  );

  const openHouseData = formatData(openHouse || []);

  return (
    <>
      {headComp}
      <PropertyPage
        {...property}
        otherProperties={otherProperties}
        attachments={attachments}
        openHouse={openHouseData}
        images={images}
        username={username}
        visitorSource="prod"
        mapKey={process.env.NEXT_PUBLIC_MAPS_KEY}
      />
    </>
  );
}

export async function getStaticProps(ctx) {
  const uuid = ctx.params.uuid;
  const username = ctx.params.username;

  try {
    const res = await axios(
      `${process.env.GATEWAY_API}/home_static/property/${username}/${uuid}`
    );

    return {
      props: {
        property: res?.data?.property,
        otherProperties: res?.data?.otherProperties,
        attachments: res?.data?.attachments,
        openHouse: res?.data?.openHouse,
        images: res?.data?.images,
      },
      revalidate: 1200,
    };
  } catch (e) {
    return {
      props: {
        error: true,
      },
      revalidate: 1,
    };
  }
}

export async function getStaticPaths() {
  const res = await axios(`${process.env.GATEWAY_API}/home_static/properties`);

  const paths = res.data.map((property) => {
    return {
      params: {
        uuid: property.uuid.toString(),
        username: property.username.toString(),
      },
    };
  });

  return {
    fallback: true,
    paths,
  };
}
