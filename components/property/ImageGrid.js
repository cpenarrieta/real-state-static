import React, { useState } from "react";
import { FIRST_URL, CARD_URL } from "./imagesConstants";
import ImageModal from "./ImageModal";

export default function ImageGrid({ pictures }) {
  const [showModal, setShowModal] = useState(false);
  const [imageKey, setImageKey] = useState(0);

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
                    className="cursor-pointer"
                    key={key}
                    onClick={() => {
                      setImageKey(0);
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
