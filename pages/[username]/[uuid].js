import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropertyPage } from "@cpenarrieta/real-state-property-components";
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

  useEffect(() => {
    async function visitorFunction() {
      const { uuid } = router.query;
      try {
        await axios.post("/api/visitor", {
          uuid,
        });
      } catch (e) {
        // ERROR send to Bugsnag
      }
    }
    visitorFunction();
  }, []);

  if (router.isFallback) {
    return <div>Properety Loading......I'm sorry for the wait!!</div>;
  }

  const { username } = router.query;

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

  const headComp = (
    <Head>
      <title>Property - {property.title}</title>
      <link rel="icon" href="/logo_icon.ico" />
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
      revalidate: 900,
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
