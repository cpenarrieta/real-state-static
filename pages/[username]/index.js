import Head from "next/head";
import fetch from "node-fetch";
import { useRouter } from "next/router";

export default function Agent({ error, firstName, lastName, phone }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>User Loading......I'm sorry for the wait!!</div>;
  }

  if (error) {
    return (
      <div>
        <h4>Agent not Found</h4>
      </div>
    );
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

  const res = await fetch(
    `${process.env.GATEWAY_API}/home_static/user/${username}`
  );

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
  const res = await fetch(`${process.env.GATEWAY_API}/home_static/users`);
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
