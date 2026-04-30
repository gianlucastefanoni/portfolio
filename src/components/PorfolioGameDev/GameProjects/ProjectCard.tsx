import React from "react";
import { useTranslation } from "../../../i18n/useTranslation";
import { CarouselMedia } from "./CarouselMedia";
import polarThumb from "../../../assets/game/polar/polar-thumb.png";
import PolarGameplay from "../../../assets/game/polar/PolarGameplay.mp4";
import Bridge from "../../../assets/game/polar/Bridge.png";
import PolarAnimState from "../../../assets/game/polar/PolarAnimState.png";
import tankThumb from "../../../assets/game/tank/tank-thumb.png";
import antsThumb from "../../../assets/game/projectAnts/KeyArt_1.png";
import TankGameplay from "../../../assets/game/tank/TankGameplay.mp4";

type Props = {
  id: string;
  number: number;
  isExpanded: boolean;
  onClick: () => void;
};

type ProjectData = {
  thumbnail: string;
  gallery?: string[];
  youtubeUrl?: string;
  steamUrl?: string;
  engineKey: string;
  roleKey: string;
  focusKey: string;
  statusKey: string;
};

const projectData: Record<string, ProjectData> = {
  ants: {
    thumbnail: antsThumb,
    youtubeUrl: "https://www.youtube.com/embed/6pRplr-C7TY",
    steamUrl: "https://store.steampowered.com/app/4540260/Project_Ants/",
    engineKey: "project_ants_engine",
    roleKey: "project_ants_role",
    focusKey: "project_ants_focus",
    statusKey: "project_ants_status",
  },
  polar: {
    thumbnail: polarThumb,
    gallery: [PolarGameplay, Bridge, PolarAnimState],
    engineKey: "project_polar_engine",
    roleKey: "project_polar_role",
    focusKey: "project_polar_focus",
    statusKey: "project_polar_status",
  },
  tank: {
    thumbnail: tankThumb,
    gallery: [TankGameplay],
    engineKey: "project_tank_engine",
    roleKey: "project_tank_role",
    focusKey: "project_tank_focus",
    statusKey: "project_tank_status",
  },
};

export const ProjectCard: React.FC<Props> = ({
  id,
  number,
  isExpanded,
  onClick,
}) => {
  const { t } = useTranslation();
  const project = projectData[id];

  return (
    <article className={`game-project-card ${isExpanded ? "is-expanded" : ""}`}>
      <button
        className="game-project-preview"
        onClick={onClick}
        aria-label={t(`project_${id}_title`)}
      >
        <img src={project.thumbnail} alt={t(`project_${id}_title`)} />
        <span className="game-project-index">
          {t("project_build_label")} {String(number).padStart(2, "0")}
        </span>
      </button>

      <div className="game-project-body">
        <div className="flex flex-wrap items-center gap-2">
          <span className="game-chip">{t(project.statusKey)}</span>
          <span className="game-chip game-chip-warm">
            {t(project.engineKey)}
          </span>
        </div>

        <button onClick={onClick} className="mt-4 text-left">
          <h3 className="text-3xl font-black tracking-tight text-white hover:text-cyan-200">
            {t(`project_${id}_title`)}
          </h3>
        </button>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {isExpanded ? t(`project_${id}_full`) : t(`project_${id}_short`)}
        </p>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="game-meta">
            <dt>{t("project_meta_role")}</dt>
            <dd>{t(project.roleKey)}</dd>
          </div>
          <div className="game-meta">
            <dt>{t("project_meta_focus")}</dt>
            <dd>{t(project.focusKey)}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={onClick} className="game-expand-button">
            {isExpanded ? t("close_build") : t("inspect_build")}
          </button>

          {project.steamUrl && (
            <a
              href={project.steamUrl}
              target="_blank"
              rel="noreferrer"
              className="game-steam-button"
            >
              {t("view_on_steam")}
            </a>
          )}
        </div>

        {isExpanded && project.youtubeUrl && (
          <div className="game-youtube-frame">
            <iframe
              src={project.youtubeUrl}
              title={t("project_ants_title")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}

        {isExpanded && project.gallery && (
          <CarouselMedia sources={project.gallery} />
        )}
      </div>
    </article>
  );
};
