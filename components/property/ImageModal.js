import React, { useCallback, useEffect } from "react";
import { Transition } from "@tailwindui/react";

const LEFT = 37;
const RIGHT = 39;
const ESCAPE = 27;

export default function ImageModal({
  showModal,
  setShowModal,
  imageKey,
  setImageKey,
  pictures,
}) {
  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;

    if (keyCode === ESCAPE) {
      setShowModal(false);
    } else if (keyCode === LEFT) {
      setImageKey((k) => {
        if (k === 0) {
          return pictures.length - 1;
        }
        return k - 1;
      });
    } else if (keyCode === RIGHT) {
      setImageKey((k) => {
        if (k === pictures.length - 1) {
          return 0;
        }
        return k + 1;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
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
              <img
                className="object-cover h-full w-full shadow-lg rounded-lg"
                src={pictures[imageKey]}
                alt={`alt`}
              />
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}
