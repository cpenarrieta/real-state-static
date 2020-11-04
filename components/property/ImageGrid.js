import React, { useState } from "react";
import ImageModal from "./ImageModal";
import Image from "next/image";

export default function ImageGrid({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  return (
    <>
      <div className={`bg-gray-50 z-10 relative`}>
        <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 sm:space-y-0 lg:grid-cols-3 lg:col-gap-8">
              {images.map((image, key) => {
                return (
                  <li
                    className="hidden sm:block sm:cursor-pointer"
                    key={`${key}-desk-ima`}
                    onClick={() => {
                      setImageKey(key);
                      setShowModal(true);
                    }}
                    key={key}
                  >
                    <div className="space-y-4">
                      <div className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <Image
                          src={image.url}
                          alt={`alt-${key}`}
                          width={469}
                          height={312}
                          className="absolute object-cover h-full w-full shadow-lg rounded-lg"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
              {images.map((image, key) => {
                return (
                  <li key={`${key}-mob-ima`} className="sm:hidden">
                    <div className="space-y-4">
                      <div className="relative pb-2/3">
                        <Image
                          src={image.urlLowRes}
                          alt={`alt-${key}`}
                          width={469}
                          height={312}
                          className="absolute object-cover h-full w-full shadow-lg rounded-lg"
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
        images={images}
      />
    </>
  );
}
