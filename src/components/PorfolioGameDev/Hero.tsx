import React from "react";
import profileImg from "../../assets/profile.png";
import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    ["03", t("game_stat_builds")],
    ["UE5", t("game_stat_engine")],
    ["C++", t("game_stat_logic")],
  ];

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-8 sm:pb-20">
      <div className="game-hero-grid mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="mb-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-200">
            <span className="game-chip">{t("game_hero_chip_systems")}</span>
            <span className="game-chip game-chip-warm">
              {t("game_hero_chip_engine")}
            </span>
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-300/90">
            {t("game_hero_eyebrow")}
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] text-white sm:text-7xl">
            Gianluca <span className="text-lime-300">Stefanoni</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
            {t("game_hero_description")}
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map(([value, label]) => (
              <div key={label} className="game-stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="game-portrait-panel">
            <img src={profileImg} alt="Gianluca Stefanoni" />
            <div className="game-portrait-caption">
              <span>{t("game_hero_build_label")}</span>
              <strong>{t("game_hero_build_focus")}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
