import React from "react";
import { getPropertyBadge } from "./propertyStatus";
import Image from "next/image";

export default function PropertyCard({
  uuid,
  title,
  mainPictureLowRes,
  bedrooms,
  bathrooms,
  price,
  status,
  publishedStatus,
  currency,
  hidePrice,
  username,
}) {
  const [badgeText, badgeColor] = getPropertyBadge(status, publishedStatus);
  const formattedPrice = new Intl.NumberFormat("en-us").format(price || 0);

  return (
    <div>
      <div className="relative">
        <a href={`/${username}/${uuid}`}>
          <Image
            src={mainPictureLowRes || "/home-default.png"}
            alt={uuid}
            width={389}
            height={324}
            layout="responsive"
            className="absolute h-full w-full object-cover rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          />
        </a>
      </div>
      <div className="relative px-4 -mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span
              className={`inline-block ${badgeColor} text-xs px-2 rounded-full uppercase font-semibold tracking-wide`}
            >
              {badgeText}
            </span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              {bedrooms} beds &bull; {bathrooms} baths
            </div>
          </div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-logoFont">
            {title}
          </h4>
          {!hidePrice && (
            <div className="mt-1">
              $ {formattedPrice}
              <span className="text-gray-600 text-xs"> {currency}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
