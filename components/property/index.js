import React from "react";
import Head from "next/head";
import Hero from "./Hero";
import LeadForm from "./LeadForm";

export default function PropertyPage({ title, mainPicture, price }) {
  return (
    <div className="h-full bg-gray-100">
      <Head>
        <title>Property - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={title} mainPicture={mainPicture} price={price} />
      <LeadForm />
    </div>
  );
}
