import { forwardRef } from "react";
import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css"; 

export const AboutMeGame = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-white fade-in-up"
      style={{ scrollMarginTop: "50px" }}
    >
      {/* Titolo di sezione */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400 title-animate">
          {t("about_title")}
        </h2>
        <div className="mt-2 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
      </div>

      {/* Contenuto */}
      <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-400">
          “Great things in business are never done by one person. They’re done
          by a team of people.”
          <footer className="mt-2 text-emerald-400 font-semibold">
            — Steve Jobs
          </footer>
        </blockquote>

        <p>
          👋 {t("greeting")}
          <span className="text-emerald-400 font-medium">
            &nbsp;Game Developer
          </span>
          &nbsp;{t("greeting_details_1")}
        </p>

        <p>{t("greeting_details_2")}</p>

        <p>{t("head_list")}</p>

        <ul className="list-disc list-inside space-y-2 ml-4 sm:ml-6">
          <li>🎨 {t("list_1")}</li>
          <li>💻 {t("list_2")}</li>
          <li>🤝 {t("list_3")}</li>
        </ul>

        <p>✨ {t("tail_list")}</p>

        <div className="pt-4">
          <button
            onClick={() => null}
            className="text-emerald-400 underline hover:text-emerald-300 transition-colors"
          >
            {t("explore_projects")}
          </button>
        </div>
      </div>
    </section>
  );
});
