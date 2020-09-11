import React from "react";
import { formatPrice } from "../utils/price";
import { getPropertyBadge } from "../utils/propertyStatus";
import { getColorTheme } from "../utils/colorTheme";
import { FIRST_URL, HERO_URL } from "./imagesConstants";

export default function HeroBackground({
  title,
  mainPicture,
  price,
  bedrooms,
  bathrooms,
  city,
  province,
  status,
  publishedStatus,
  lotSize,
  color,
}) {
  const [badgeText, badgeColor] = getPropertyBadge(status, publishedStatus);
  const [colorMain, colorHover] = getColorTheme(color);

  // set default background if there is no image
  const mainPictureLowRes = mainPicture && mainPicture.replace(FIRST_URL, HERO_URL);

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url("${mainPictureLowRes}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-20 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="bg-white bg-opacity-75 rounded-md max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 p-10">
          <div>
            <span
              className={`inline-block bg-${badgeColor}-200 text-${badgeColor}-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide`}
            >
              {badgeText}
            </span>
          </div>

          <div
            className={`text-2xl h-12 w-12 text-${colorMain} font-bold inline`}
          >
            {`$ ${formatPrice(price)}`}
          </div>

          <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h2>
          <p className="mt-1 text-lg leading-7 text-gray-500">
            {city}, {province}
          </p>

          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              {bedrooms && (
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base leading-6 font-medium text-gray-500">
                    Bedrooms
                  </dt>
                  <dd
                    className={`order-1 text-2xl leading-8 font-extrabold text-${colorMain} sm:text-3xl sm:leading-9`}
                  >
                    {bedrooms}
                  </dd>
                </div>
              )}
              {bathrooms && (
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base leading-6 font-medium text-gray-500">
                    Bathrooms
                  </dt>
                  <dd
                    className={`order-1 text-2xl leading-8 font-extrabold text-${colorMain} sm:text-3xl sm:leading-9`}
                  >
                    {bathrooms}
                  </dd>
                </div>
              )}
              {lotSize && (
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base leading-6 font-medium text-gray-500">
                    SQFT
                  </dt>
                  <dd
                    className={`order-1 text-2xl leading-8 font-extrabold text-${colorMain} sm:text-3xl sm:leading-9`}
                  >
                    {formatPrice(lotSize)}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-lg shadow-md mt-6">
            <button
              onClick={() => {
                const el = window.document.getElementById("form-lead-section");
                el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block w-full text-center rounded-lg border border-transparent bg-${colorMain} px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-${colorHover} focus:outline-none focus:border-${colorMain} focus:shadow-outline-${color} transition ease-in-out duration-150`}
              aria-describedby="tier-growth"
            >
              Request Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
