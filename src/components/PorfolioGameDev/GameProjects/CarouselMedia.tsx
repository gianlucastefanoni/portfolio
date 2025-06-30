import React, { useState } from "react";

type Props = {
  sources: string[];
};

export const CarouselMedia: React.FC<Props> = ({ sources }) => {
  const [index, setIndex] = useState(0);
  const isVideo = sources[index].endsWith(".mp4");

  const prev = () => {
    setIndex((i) => (i === 0 ? sources.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === sources.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 relative">
      <div className="rounded-md overflow-hidden mb-2 aspect-video bg-black relative">
        <button
          onClick={prev}
          aria-label="Previous"
          className="block md:hidden absolute top-1/2 left-2 -translate-y-1/2 bg-teal-400 opacity-30 hover:bg-opacity-60 text-white rounded-full p-1 text-[8px] z-10"
        >
          &#8592;
        </button>

        <button
          onClick={next}
          aria-label="Next"
          className="block md:hidden absolute top-1/2 right-2 -translate-y-1/2 bg-teal-400 opacity-30 hover:bg-opacity-60 text-white rounded-full p-1 text-[8px] z-10"
        >
          &#8594;
        </button>

        {isVideo ? (
          <video
            src={sources[index]}
            controls
            className="w-full h-full object-contain"
            autoPlay
          />
        ) : (
          <img
            src={sources[index]}
            alt={`media-${index}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => window.open(sources[index], "blank_")}
          />
        )}
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {sources.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-teal-400" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
