import { useTranslation } from "../../i18n/useTranslation";
import { useLanguageStore } from "../../store/useLanguageStore";
import "../../App.css";

export const FullstackDownloadSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  const cvHref =
    language === "it"
      ? "/portfolio/files/StefanoniGianluca_CV_it.pdf"
      : "/portfolio/files/StefanoniGianluca_CV_en.pdf";

  return (
    <section className="fullstack-download-section">
      <div className="fullstack-download-panel">
        <div>
          <p className="fullstack-download-kicker">
            {t("fullstack_download_kicker")}
          </p>
          <h2>{t("download_title")}</h2>
          <p>{t("fullstack_download_description")}</p>
        </div>

        <a href={cvHref} download>
          {t("cv_button")}
        </a>
      </div>
    </section>
  );
};
