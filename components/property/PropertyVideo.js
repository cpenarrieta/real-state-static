import React from "react";

export default function PropertyVideo({ videoUrl, videoType }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto pb-10 px-4 max-w-screen-xl sm:px-6 lg:px-8">
        {videoType === "YOUTUBE" && (
          <iframe
            className="mx-auto w-full"
            height="573.75"
            src={`https://www.youtube-nocookie.com/embed/${videoUrl}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {videoType === "VIMEO" && (
          <iframe
            src={`https://player.vimeo.com/video/${videoUrl}?title=0&byline=0&portrait=0`}
            height="573.75"
            className="mx-auto w-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
