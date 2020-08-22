import Head from "next/head";
import fetch from "node-fetch";
import { useRouter } from "next/router";

export default function Agent({ firstName, lastName, phone }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>User Loading......I'm sorry for the wait!!</div>;
  }

  return (
    <div className="container">
      <Head>
        <title>Agent Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h4>Hello World User page</h4>
      <h6>
        {firstName} - {lastName} - {phone}
      </h6>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const username = ctx.params.username;

  const res = await fetch(`${process.env.STATIC_API}/user/${username}`);
  const json = await res.json();

  return { props: json, revalidate: 900 };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.STATIC_API}/users`);
  const json = await res.json();

  const paths = json.map((a) => {
    return {
      params: {
        username: a.username.toString(),
      },
    };
  });

  return {
    fallback: true,
    paths,
  };
}
