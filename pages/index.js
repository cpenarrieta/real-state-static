import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Real Estate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl text-center text-accent-1">
        Real Estate App - Index Page
      </h1>
    </div>
  );
}
