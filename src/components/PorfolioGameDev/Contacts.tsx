import { forwardRef } from "react";
import { useTranslation } from "../../i18n/useTranslation";
import email from "../../assets/logos/email.svg";
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_MAIL } from "../../consts/link";
import "../../App.css";

export const Contacts = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      label: t("contact_linkedin_label"),
      icon: linkedin,
      href: LINK_LINKEDIN,
    },
    {
      label: t("contact_github_label"),
      icon: github,
      href: LINK_GITHUB,
    },
    {
      label: t("contact_email_label"),
      icon: email,
      href: LINK_MAIL,
    },
  ];

  return (
    <section
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-14 text-white sm:px-6"
      style={{ scrollMarginTop: "72px" }}
    >
      <div className="game-contact-layout">
        <div className="game-contact-copy">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
            {t("contact_eyebrow")}
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t("contact_title")}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            {t("contact_intro")}
          </p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              {t("contact_social_label")}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="game-social-button"
                  onClick={() => window.open(item.href, "_blank")}
                >
                  <img src={item.icon} alt="" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mzzgoekg"
          method="POST"
          className="game-contact-form"
        >
          <div className="game-console-header">
            <span>{t("contact_panel_label")}</span>
            <strong>{t("contact_panel_status")}</strong>
          </div>

          <label>
            <span>{t("contact_name")}</span>
            <input
              type="text"
              name="name"
              placeholder={t("contact_name")}
              required
            />
          </label>

          <label>
            <span>{t("contact_email")}</span>
            <input
              type="email"
              name="email"
              placeholder={t("contact_email")}
              required
            />
          </label>

          <label>
            <span>{t("contact_message")}</span>
            <textarea
              name="message"
              rows={5}
              placeholder={t("contact_message")}
              required
            />
          </label>

          <button type="submit" className="game-submit-button">
            {t("contact_button")}
          </button>
        </form>
      </div>
    </section>
  );
});
