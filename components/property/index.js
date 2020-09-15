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
  images,
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
  color,
}) {
  const icon = mainPicture && mainPicture.replace(FIRST_URL, THUMB_URL);

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
        color={color}
      />

      {videoUrl && <PropertyVideo videoUrl={videoUrl} videoType={videoType} />}

      {images && <ImageGrid images={images} />}

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
        color={color}
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
        color={color}
      />

      {otherProperties && otherProperties.length > 0 && (
        <OtherProperties
          otherProperties={otherProperties}
          userFirstName={userFirstName}
          color={color}
        />
      )}

      <Footer color={color} />
    </div>
  );
}
