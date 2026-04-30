import React, { useState } from "react";
import { useTranslation } from "../../../i18n/useTranslation";

type Props = {
  sources: string[];
};

export const CarouselMedia: React.FC<Props> = ({ sources }) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const isVideo = sources[index].endsWith(".mp4");

  const prev = () => setIndex((i) => (i === 0 ? sources.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === sources.length - 1 ? 0 : i + 1));

  return (
    <div className="game-carousel">
      <div className="game-carousel-frame">
        <button
          onClick={prev}
          aria-label={t("media_previous")}
          className="game-carousel-nav left-3"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          aria-label={t("media_next")}
          className="game-carousel-nav right-3"
        >
          &#8594;
        </button>

        {isVideo ? (
          <video
            src={sources[index]}
            controls
            className="h-full w-full object-contain"
            autoPlay
            muted
          />
        ) : (
          <img
            src={sources[index]}
            alt={`${t("project_media_alt")} ${index + 1}`}
            className="h-full w-full cursor-pointer object-cover"
            onClick={() => window.open(sources[index], "_blank")}
          />
        )}
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {sources.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-cyan-300" : "w-2 bg-slate-600"
            }`}
            aria-label={`${t("media_go_to")} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
