import React from "react";
import DestinationCard from "./DestinationCard";

export default function Hero({ title, mainPicture, price }) {
  return (
    <div id="app">
      <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src={mainPicture}
              alt="Property Hero"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              {title}
              <br />
              <span className="text-brand-blue">{`$ ${new Intl.NumberFormat(
                "en-us"
              ).format(price)}`}</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="#form-lead-section"
                className="btn bg-brand-blue text-white shadow-lg sm:text-base px-5 py-3 rounded-lg uppercase tracking-wider font-semi-bold"
              >
                Request Info
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={mainPicture}
            alt="Property hero"
          />
        </div>
      </div>
    </div>
  );
}
