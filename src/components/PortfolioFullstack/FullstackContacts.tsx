import email from "../../assets/logos/email.svg";
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_MAIL } from "../../consts/link";
import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css";

export const FullstackContacts = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { label: t("contact_linkedin_label"), icon: linkedin, href: LINK_LINKEDIN },
    { label: t("contact_github_label"), icon: github, href: LINK_GITHUB },
    { label: t("contact_email_label"), icon: email, href: LINK_MAIL },
  ];

  return (
    <section className="fullstack-contact-section">
      <div className="fullstack-section-heading">
        <p>{t("fullstack_contact_kicker")}</p>
        <h2>{t("contact_title")}</h2>
      </div>

      <div className="fullstack-contact-layout">
        <div className="fullstack-contact-copy">
          <span>{t("fullstack_contact_statement")}</span>
          <p>{t("contact_intro")}</p>

          <div className="fullstack-contact-socials">
            {socialLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => window.open(item.href, "_blank")}
              >
                <img src={item.icon} alt="" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <form
          action="https://formspree.io/f/mzzgoekg"
          method="POST"
          className="fullstack-contact-form"
        >
          <div className="fullstack-form-header">
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

          <button type="submit">{t("contact_button")}</button>
        </form>
      </div>
    </section>
  );
};
