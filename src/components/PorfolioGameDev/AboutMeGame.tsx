import { forwardRef } from "react";
import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css";

export const AboutMeGame = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  const profileStats = [
    ["01", t("about_stat_design")],
    ["02", t("about_stat_code")],
    ["03", t("about_stat_team")],
  ];

  const principles = ["list_1", "list_2", "list_3"];

  return (
    <section
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-14 text-white sm:px-6"
      style={{ scrollMarginTop: "72px" }}
    >
      <div className="game-about-layout">
        <div className="game-about-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
            {t("about_eyebrow")}
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t("about_title")}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            {t("about_intro")}
          </p>
        </div>

        <div className="game-about-console">
          <div className="game-console-header">
            <span>{t("about_console_label")}</span>
            <strong>{t("about_console_status")}</strong>
          </div>

          <blockquote className="game-about-quote">
            <p>{t("about_quote")}</p>
            <footer>{t("about_quote_author")}</footer>
          </blockquote>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
            <p>
              {t("greeting")}{" "}
              <span className="font-semibold text-cyan-200">
                Game Developer
              </span>{" "}
              {t("greeting_details_1")}
            </p>

            <p>{t("greeting_details_2")}</p>

            <p>{t("tail_list")}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {profileStats.map(([number, label]) => (
          <div key={label} className="game-about-stat">
            <span>{number}</span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>

      <div className="mt-6 game-principles-panel">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            {t("about_principles_label")}
          </p>
          <h3 className="mt-2 text-2xl font-black text-white">
            {t("head_list")}
          </h3>
        </div>

        <ul className="grid gap-3 md:grid-cols-3">
          {principles.map((key) => (
            <li key={key} className="game-principle">
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
