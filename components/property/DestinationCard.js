import React from "react";
import { formatPrice } from "../utils/price";
import Link from "next/link";
import { getColorTheme } from "../utils/colorTheme";

export default function DestinationCard({
  imageUrl,
  imageAlt,
  city,
  price,
  title,
  bedrooms,
  bathrooms,
  uuid,
  username,
  color,
}) {
  const [_, colorSec] = getColorTheme(color);

  return (
    <Link href={`/${username}/${uuid}`}>
      <a>
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden h-32 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img
            className="h-32 w-32 flex-shrink-0"
            src={imageUrl}
            alt={imageAlt}
          />
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <h3 className="text-sm font-semibold text-gray-500">{city}</h3>
            <p className={`text-gray-600 mt-2 text-${colorSec}`}>
              $ {formatPrice(price)}
            </p>
            <div className="mt-2">
              <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                {bedrooms} beds &bull; {bathrooms} baths
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
