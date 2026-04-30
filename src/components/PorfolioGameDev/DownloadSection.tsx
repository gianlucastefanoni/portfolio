import React from "react";
import { useTranslation } from "../../i18n/useTranslation";
import { useLanguageStore } from "../../store/useLanguageStore";
import "../../App.css";

export const DownloadSection: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  const downloads = [
    {
      type: t("download_cv_type"),
      title: t("cv_button"),
      description: t("cv_description"),
      href:
        language === "it"
          ? "/portfolio/files/StefanoniGianluca_CV_it.pdf"
          : "/portfolio/files/StefanoniGianluca_CV_en.pdf",
    },
    {
      type: t("download_certificate_type"),
      title: t("certificate_button"),
      description: t("certificate_description"),
      href: "/portfolio/files/UE5DeveloperCourse.pdf",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 text-white sm:px-6">
      <div className="game-download-section">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
            {t("download_eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            {t("download_title")}
          </h2>
        </div>

        <div className="game-download-grid">
          {downloads.map((item) => (
            <article key={item.title} className="game-download-card">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href} download>
                {t("download_action")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
