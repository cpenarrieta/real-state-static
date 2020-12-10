import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (activeIndex === null) {
        return;
      }

      if (e.key === "ArrowLeft" || e.keyCode === 37) {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      } else if (e.key === "ArrowRight" || e.keyCode === 39) {
        setActiveIndex(Math.min(activeIndex + 1, images.length - 1));
      }
    },
    [activeIndex, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={`bg-gray-50 z-10 relative`}>
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 sm:space-y-0 lg:grid-cols-3 lg:col-gap-8">
          {images.map((img, i) => {
            const handleZoomChange = useCallback(
              (isZoomed) => {
                if (isZoomed) {
                  setActiveIndex(i);
                  return;
                }
                setActiveIndex(null);
              },
              [i]
            );

            return (
              <li key={`${i}-${img.url}`}>
                <ControlledZoom
                  isZoomed={activeIndex === i}
                  onZoomChange={handleZoomChange}
                  transitionDuration={0}
                  // wrapStyle={{ width: "100%" }}
                >
                  <Image
                    src={img.url}
                    alt={`alt-${i}`}
                    width={1200}
                    height={800}
                    className="absolute object-cover h-full w-full shadow-lg rounded-lg"
                  />
                </ControlledZoom>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
