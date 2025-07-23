import React from "react";
import { useTranslation } from "../../i18n/useTranslation";
import { useLanguageStore } from "../../store/useLanguageStore";

export const DownloadSection: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  return (
    <section className="text-white px-4 sm:px-8 py-8 rounded-lg max-w-6xl mx-auto space-y-8 w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center sm:text-left">
        {t("download_title")}
      </h2>

      <div className="space-y-2">
        <p className="text-gray-300 text-sm sm:text-base">
          {t("cv_description")}
        </p>
        <a
          href={language == 'it' ? "/portfolio/files/StefanoniGianluca_CV_it.pdf": "/portfolio/files/StefanoniGianluca_CV_en.pdf"}
          download
          className="inline-block bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md text-sm sm:text-base"
        >
          {t("cv_button")}
        </a>
      </div>

      <div className="space-y-2">
        <p className="text-gray-300 text-sm sm:text-base">
          {t("certificate_description")}
        </p>
        <a
          href="/portfolio/files/UE5DeveloperCourse.pdf"
          download
          className="inline-block bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md text-sm sm:text-base"
        >
          {t("certificate_button")}
        </a>
      </div>
    </section>
  );
};
