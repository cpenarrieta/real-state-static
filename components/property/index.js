import React from "react";
import Head from "next/head";
import LeadForm from "./LeadForm";
import ImageGrid from "./ImageGrid";
import Footer from "./Footer";
import OtherProperties from "./OtherProperties";
import PropertyVideo from "./PropertyVideo";
import TechSpecs from "./TechSpecs";
import HeroBackground from "./HeroBackground";
import { FIRST_URL, THUMB_URL } from "./imagesConstants";

export default function PropertyPage({
  title,
  address1,
  bedrooms,
  bathrooms,
  city,
  province,
  zipCode,
  community,
  lotSize,
  mainPicture,
  price,
  userEmail,
  userPhone,
  userAddress1,
  userCity,
  userProvince,
  userZipcode,
  pictures,
  otherProperties,
  userFirstName,
  userLastName,
  userPicture,
  status,
  publishedStatus,
  userSmallBio,
  videoUrl,
  videoType,
  description,
  propertyType,
  builtYear,
  grossTaxesLastYear,
  lat,
  lon,
  attachments,
}) {
  const icon = mainPicture.replace(FIRST_URL, THUMB_URL);

  return (
    <div className="h-full bg-gray-50">
      <Head>
        <title>Property - {title}</title>
        <link rel="icon" href={icon} />
      </Head>

      <HeroBackground
        title={title}
        mainPicture={mainPicture}
        price={price}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        city={city}
        province={province}
        status={status}
        publishedStatus={publishedStatus}
        zipCode={zipCode}
        lotSize={lotSize}
      />

      {videoUrl && <PropertyVideo videoUrl={videoUrl} videoType={videoType} />}

      {pictures && <ImageGrid pictures={pictures} />}

      {/* Neraby Items
      Floorplan */}

      <TechSpecs
        address1={address1}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        city={city}
        province={province}
        zipCode={zipCode}
        lotSize={lotSize}
        description={description}
        propertyType={propertyType}
        builtYear={builtYear}
        grossTaxesLastYear={grossTaxesLastYear}
        community={community}
        lat={lat}
        lon={lon}
        attachments={attachments}
      />

      <LeadForm
        userEmail={userEmail}
        userPhone={userPhone}
        userAddress1={userAddress1}
        userCity={userCity}
        userProvince={userProvince}
        userZipcode={userZipcode}
        userFirstName={userFirstName}
        userLastName={userLastName}
        userPicture={userPicture}
        userSmallBio={userSmallBio}
      />

      {otherProperties && otherProperties.length > 0 && (
        <OtherProperties
          otherProperties={otherProperties}
          userFirstName={userFirstName}
        />
      )}

      <Footer />
    </div>
  );
}
