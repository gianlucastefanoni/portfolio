import React from "react";
import { useTranslation } from "../../i18n/useTranslation";

export const DownloadSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="text-white p-8 rounded-lg w-6xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold mb-4">{t("download_title")}</h2>

      <div>
        <p className="mb-2 text-gray-300">{t("cv_description")}</p>
        <a
          href="/files/tuo-cv.pdf"
          download
          className="inline-block bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold py-3 px-6 rounded-md"
        >
          {t("cv_button")}
        </a>
      </div>

      <div>
        <p className="mb-2 text-gray-300">{t("certificate_description")}</p>
        <a
          href="/files/tuo-certificato.pdf"
          download
          className="inline-block bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold py-3 px-6 rounded-md"
        >
          {t("certificate_button")}
        </a>
      </div>
    </section>
  );
};
