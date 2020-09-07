import React, { useState } from "react";
import { FIRST_URL, CARD_URL, CARD_MOBILE_URL } from "./imagesConstants";
import ImageModal from "./ImageModal";

export default function ImageGrid({ pictures }) {
  const [showModal, setShowModal] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  return (
    <>
      <div className={`bg-gray-50 z-10 relative`}>
        <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 sm:space-y-0 lg:grid-cols-3 lg:col-gap-8">
              {pictures.map((image, key) => {
                const cardImage = image.replace(FIRST_URL, CARD_URL);
                const cardMobileImage = image.replace(
                  FIRST_URL,
                  CARD_MOBILE_URL
                );

                return (
                  <div key={key}>
                    <li
                      className="hidden sm:block sm:cursor-pointer"
                      key={`${key}-desk-ima`}
                      onClick={() => {
                        setImageKey(key);
                        setShowModal(true);
                      }}
                    >
                      <div className="space-y-4">
                        <div className="relative pb-2/3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                          <img
                            className="absolute object-cover h-full w-full shadow-lg rounded-lg"
                            src={cardImage}
                            alt={`alt-${key}`}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="sm:hidden" key={`${key}-mob-ima`}>
                      <div className="space-y-4">
                        <div className="relative pb-2/3">
                          <img
                            className="absolute object-cover h-full w-full shadow-lg rounded-lg"
                            src={cardMobileImage}
                            alt={`alt-${key}`}
                          />
                        </div>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <ImageModal
        showModal={showModal}
        setShowModal={setShowModal}
        imageKey={imageKey}
        setImageKey={setImageKey}
        pictures={pictures}
      />
    </>
  );
}
