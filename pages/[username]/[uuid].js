import Head from "next/head";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Property({ error, uuid, description, title }) {
  const router = useRouter();

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

  return (
    <div>
      <Head>
        <title>Property - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">{uuid}</h1>
        <h5 className="text-md text-center text-accent-1">{description}</h5>
        <Link href={`/${username}`}>
          <a>Agent page</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const uuid = ctx.params.uuid;

  const res = await fetch(`${process.env.STATIC_API}/property/${uuid}`);
  if (res.status >= 200 && res.status < 300) {
    const json = await res.json();
    return { props: json, revalidate: 900 };
  }

  return {
    props: {
      error: true,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.STATIC_API}/properties`);
  const json = await res.json();

  const paths = json.map((a) => {
    return {
      params: {
        uuid: a.uuid.toString(),
        username: a.username.toString(),
      },
    };
  });

  return {
    fallback: true,
    paths,
  };
}
