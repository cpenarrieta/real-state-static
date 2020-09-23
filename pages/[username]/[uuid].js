import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import PropertyPage from "../../components/property";
import Head from "next/head";

export default function Property({
  error,
  property,
  otherProperties,
  attachments,
  images,
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
    </Head>
  );

  return (
    <>
      {headComp}
      <PropertyPage
        {...property}
        otherProperties={otherProperties}
        attachments={attachments}
        images={images}
        username={username}
      />
    </>
  );
}

export async function getStaticProps(ctx) {
  const uuid = ctx.params.uuid;
  const username = ctx.params.username;

  try {
    const res = await axios(
      `${process.env.STATIC_API}/property/${username}/${uuid}`
    );

    return {
      props: {
        property: res?.data?.property,
        otherProperties: res?.data?.otherProperties,
        attachments: res?.data?.attachments,
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
  const res = await axios(`${process.env.STATIC_API}/properties`);

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
