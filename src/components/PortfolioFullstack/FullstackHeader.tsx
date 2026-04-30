import bg from "../../assets/bg.jpg";
import email from "../../assets/logos/email.svg";
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_MAIL } from "../../consts/link";
import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css";

export const FullstackHeader = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { label: t("fullstack_social_linkedin"), icon: linkedin, href: LINK_LINKEDIN },
    { label: t("fullstack_social_github"), icon: github, href: LINK_GITHUB },
    { label: t("fullstack_social_email"), icon: email, href: LINK_MAIL },
  ];

  const scrollToProjects = () => {
    document
      .getElementById("fullstack-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fullstack-hero">
      <div
        className="fullstack-hero-media"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="fullstack-hero-inner">
        <div className="fullstack-hero-copy">
          <p className="fullstack-kicker">{t("fullstack_hero_kicker")}</p>

          <h1>
            <span>{t("fullstack_hero_title_1")}</span>
            <span>{t("fullstack_hero_title_2")}</span>
          </h1>

          <p className="fullstack-hero-description">
            {t("fullstack_hero_description")}
          </p>

          <div className="fullstack-hero-actions">
            <button onClick={scrollToProjects}>
              {t("fullstack_hero_primary")}
            </button>
            <a href={LINK_MAIL}>{t("fullstack_hero_secondary")}</a>
          </div>
        </div>

        <aside className="fullstack-terminal">
          <div className="fullstack-terminal-top">
            <span />
            <span />
            <span />
          </div>

          <div className="fullstack-terminal-body">
            <p>
              <span>const</span> developer = Gianluca;
            </p>
            <p>
              developer.role = <strong>"Full Stack"</strong>;
            </p>
            <p>
              developer.stack = [React, Angular, TypeScript, C#, Java];
            </p>
            <p>
              developer.focus = <strong>"Scalable web apps"</strong>;
            </p>
          </div>

          <div className="fullstack-terminal-footer">
            {socialLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => window.open(item.href, "_blank")}
                aria-label={item.label}
              >
                <img src={item.icon} alt="" />
              </button>
            ))}
          </div>
        </aside>
      </div>

      <div className="fullstack-marquee" aria-hidden="true">
        <div>
          <span>React</span>
          <span>TypeScript</span>
          <span>Angular</span>
          <span>C#</span>
          <span>Java</span>
          <span>SQL</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};
