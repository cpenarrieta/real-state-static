import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Real State App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl text-center text-accent-1">
        Real State App - Index Page
      </h1>
    </div>
  );
}
