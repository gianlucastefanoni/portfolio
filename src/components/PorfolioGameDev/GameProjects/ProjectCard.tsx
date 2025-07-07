import React from "react";
import { useTranslation } from "../../../i18n/useTranslation";
import { CarouselMedia } from "./CarouselMedia";
import polarThumb from "../../../assets/game/polar/polar-thumb.png";
import PolarGameplay from "../../../assets/game/polar/PolarGameplay.mp4";
import Bridge from "../../../assets/game/polar/Bridge.png";
import PolarAnimState from "../../../assets/game/polar/PolarAnimState.png";
import megaKickerzThumb from "../../../assets/game/megaKickerz/thumb-mega-kickerz.png";
import Gameplay from "../../../assets/game/megaKickerz/Gameplay.mp4";
import Customize from "../../../assets/game/megaKickerz/Customize.png";
import tankThumb from "../../../assets/game/tank/tank-thumb.png";
import TankGameplay from "../../../assets/game/tank/TankGameplay.mp4";

type Props = {
  id: string;
  isExpanded: boolean;
  onClick: () => void;
};

const mediaById: Record<string, { thumbnail: string; gallery: string[] }> = {
  polar: {
    thumbnail: polarThumb,
    gallery: [PolarGameplay, Bridge, PolarAnimState],
  },
  kickerz: {
    thumbnail: megaKickerzThumb,
    gallery: [Gameplay, Customize],
  },
  tank: {
    thumbnail: tankThumb,
    gallery: [TankGameplay],
  },
};

export const ProjectCard: React.FC<Props> = ({ id, isExpanded, onClick }) => {
  const { t } = useTranslation();
  const media = mediaById[id];

  return (
    <div
      className={`w-full md:w-80 transition-all duration-300
    ${isExpanded ? "md:w-full" : "hover:scale-[1.02]"}
  `}
    >
      <div
        className={`rounded-xl p-6 sm:p-8 bg-teal-900/70 backdrop-blur-md border border-teal-800 transition-all duration-300
      ${isExpanded ? "ring-1 ring-emerald-400" : "shadow-md"}
      ${!isExpanded ? "min-h-[420px]" : ""}
    `}
      >
        {/* Titolo */}
        <h3
          onClick={onClick}
          className="text-2xl font-semibold tracking-tight mb-3 cursor-pointer text-emerald-400 hover:underline"
        >
          {t(`project_${id}_title`)}
        </h3>

        {/* Thumbnail (solo se non espansa) */}
        {!isExpanded && (
          <>
            <img
              onClick={onClick}
              src={media.thumbnail}
              alt={t(`project_${id}_title`)}
              className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
            />
            <div className="block md:hidden text-xs text-emerald-400 mb-2">
              {t("tap_to_expand")}
            </div>
          </>
        )}

        {/* Descrizione */}
        <p
          onClick={onClick}
          className="text-sm text-gray-300 leading-relaxed mb-4 cursor-pointer"
        >
          {isExpanded
            ? t(`project_${id}_full`)
            : t(`project_${id}_short`)}
        </p>

        {/* Media Carousel */}
        {isExpanded && <CarouselMedia sources={media.gallery} />}
      </div>
    </div>
  );
};
