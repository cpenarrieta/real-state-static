import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-logoPink">
      <div className="relative overflow-hidden">
        <div className="block absolute inset-y-0 h-full w-full">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-12 lg:pb-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Image
                    src="/original_transparent.png"
                    alt="Realtor App Logo"
                    width={250}
                    height={104}
                    className="mt-5"
                  />
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                      onClick={() => setMenuOpen((m) => !m)}
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                <button
                  className="font-medium text-logoFont hover:text-gray-900 transition duration-150 ease-in-out"
                  onClick={() => {
                    const el = window.document.getElementById("id-features");
                    el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Product
                </button>
                <button
                  className="font-medium text-logoFont hover:text-gray-900 transition duration-150 ease-in-out"
                  onClick={() => {
                    const el = window.document.getElementById("id-faq");
                    el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FAQ
                </button>
                <button
                  className="font-medium text-logoFont hover:text-gray-900 transition duration-150 ease-in-out"
                  onClick={() => {
                    const el = window.document.getElementById("id-pricing");
                    el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Pricing
                </button>
              </div>
              <div className="absolute flex items-center justify-end inset-y-0 right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="https://app.realtorapp.co"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-logoRed focus:outline-none focus:border-logoRed-500 hover:text-logoFont focus:shadow-outline-logoRed active:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Go to App
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-logoFont sm:text-5xl sm:leading-none md:text-6xl">
                Finally, the website
                <br />
                <span className="text-logoRed">your property deserves</span>
              </h1>
              <h2 className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We'll manage all your property websites with lead capture
                capabilities, open house schedule and analytics dashboards. No
                subscriptions, No contracts, Pay once and own your property
                website forever.
              </h2>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="https://app.realtorapp.co"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-logoRed focus:outline-none focus:border-logoRed-500 hover:text-logoFont focus:shadow-outline-logoRed active:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Start Now
                  </a>
                </span>
                <span className="ml-5 inline-flex rounded-md shadow">
                  <a
                    href="https://realtorapp.co/cpenarrieta/b4wjd6OoLv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-logoFont focus:outline-none focus:border-logoRed-500 hover:text-logoRed focus:shadow-outline-logoRed active:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Demo Site
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-logoFont"></div>
          </div>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <Image
              src="/ra_dashboard.png"
              alt="Realtor App Dashboard"
              width={1627}
              height={1254}
              quality={100}
              className="relative rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-logoFont">
        <div className="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8">
          <h3 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide"></h3>
        </div>
      </div>
    </div>
  );
}
