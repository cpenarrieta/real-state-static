import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import { FIRST_URL, CARD_URL } from "./imagesConstants";

export default function ImageGrid({ pictures }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  return (
    <>
      <div className={`bg-white ${showModal ? "" : "z-20 relative"}`}>
        <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 sm:space-y-0 lg:grid-cols-3 lg:col-gap-8">
              {pictures.map((image, key) => {
                const cardImage = image.replace(FIRST_URL, CARD_URL);

                return (
                  <li
                    key={key}
                    onClick={() => {
                      setSelectedImage(image);
                      setShowModal(true);
                    }}
                  >
                    <div className="space-y-4">
                      <div className="relative pb-2/3">
                        <img
                          className="absolute object-cover h-full w-full shadow-lg rounded-lg"
                          src={cardImage}
                          alt={`alt-${key}`}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* MODAL */}

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition
            show={showModal}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <div
                ref={ref}
                className="fixed inset-0 transition-opacity"
                onClick={() => setShowModal(false)}
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
            )}
          </Transition>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <Transition
            show={showModal}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {(ref) => (
              <div
                ref={ref}
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <img
                  className="object-cover h-full w-full shadow-lg rounded-lg"
                  src={selectedImage}
                  alt={`alt`}
                />
              </div>
            )}
          </Transition>
        </div>
      </div>
    </>
  );
}
