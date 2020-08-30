import React from "react";
import Head from "next/head";
import Hero from "./Hero";
import LeadForm from "./LeadForm";
import ImageGrid from "./ImageGrid";

export default function PropertyPage({
  title,
  mainPicture,
  price,
  userEmail,
  userPhone,
  userAddress1,
  userCity,
  userProvince,
  userZipcode,
}) {
  return (
    <div className="h-full bg-gray-100">
      <Head>
        <title>Property - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={title} mainPicture={mainPicture} price={price} />
      <ImageGrid />
      <LeadForm
        userEmail={userEmail}
        userPhone={userPhone}
        userAddress1={userAddress1}
        userCity={userCity}
        userProvince={userProvince}
        userZipcode={userZipcode}
      />
    </div>
  );
}
