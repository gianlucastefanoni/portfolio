import React, { useState } from "react";

type Props = {
  sources: string[];
};

export const CarouselMedia: React.FC<Props> = ({ sources }) => {
  const [index, setIndex] = useState(0);

  const isVideo = sources[index].endsWith(".mp4");

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <div className="rounded-md overflow-hidden mb-2 aspect-video bg-black">
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
          />
        ))}
      </div>
    </div>
  );
};
