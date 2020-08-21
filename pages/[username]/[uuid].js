import Head from "next/head";
import fetch from "node-fetch";
import { useRouter } from "next/router";

export default function Property({ uuid, description, title }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Properety Loading......I'm sorry for the wait!!</div>;
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
      </div>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const uuid = ctx.params.uuid;

  const res = await fetch(`${process.env.STATIC_API}/property/${uuid}`);
  const json = await res.json();

  return { props: json, unstable_revalidate: 900 };
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
