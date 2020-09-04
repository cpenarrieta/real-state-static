import React from "react";
import { getPropertyType } from "../utils/propertyType";
import { formatPrice } from "../utils/price";

export default function TechSpecs({
  bedrooms,
  bathrooms,
  address1,
  city,
  province,
  zipCode,
  lotSize,
  description,
  propertyType,
  builtYear,
  grossTaxesLastYear,
  community,
}) {
  return (
    <div className="bg-gray-50 mx-auto px-4 max-w-screen-xl mb-3 sm:px-6 lg:px-8 pb-12 lg:pb-24 lg:pt-12">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg ">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Property Overview
          </h3>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Address
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {`${address1}, ${city}, ${province} ${zipCode}`}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Community
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {community}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Property Type
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {getPropertyType(propertyType)}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Built Year
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {builtYear}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Taxes Last Year
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {formatPrice(grossTaxesLastYear)}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Lot Size
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {formatPrice(lotSize)} SQFT
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Bedrooms
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {bedrooms}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Bathrooms
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {bathrooms}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Description
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {description}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Attachments
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                <ul className="border border-gray-200 rounded-md">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                    <div className="w-0 flex-1 flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">
                        floorplans.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                    <div className="w-0 flex-1 flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">
                        mls_details.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
