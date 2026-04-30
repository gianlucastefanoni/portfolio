import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css";

export const AboutMe = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      value: "01",
      title: t("fullstack_about_highlight_1_title"),
      text: t("fullstack_about_highlight_1_text"),
    },
    {
      value: "02",
      title: t("fullstack_about_highlight_2_title"),
      text: t("fullstack_about_highlight_2_text"),
    },
    {
      value: "03",
      title: t("fullstack_about_highlight_3_title"),
      text: t("fullstack_about_highlight_3_text"),
    },
  ];

  return (
    <section className="fullstack-about">
      <div className="fullstack-section-heading">
        <p>{t("fullstack_about_kicker")}</p>
        <h2>{t("about_title")}</h2>
      </div>

      <div className="fullstack-about-grid">
        <div className="fullstack-about-bigtext">
          <p>{t("fullstack_about_statement")}</p>
        </div>

        <div className="fullstack-about-copy">
          <blockquote>
            <p>{t("fullstack_about_quote")}</p>
            <footer>{t("fullstack_about_quote_author")}</footer>
          </blockquote>

          <div className="fullstack-about-paragraphs">
            <p>
              {t("fullstack_about_intro_1")}{" "}
              <span>{t("fullstack_about_role")}</span>{" "}
              {t("fullstack_about_intro_2")}
            </p>
            <p>{t("fullstack_about_intro_3")}</p>
          </div>
        </div>
      </div>

      <div className="fullstack-about-highlights">
        {highlights.map((item, index) => (
          <article
            key={item.title}
            className="fullstack-about-highlight"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span>{item.value}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
