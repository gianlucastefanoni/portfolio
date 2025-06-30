import React from "react";
import { useTranslation } from "../../i18n/useTranslation";
import email from "../../assets/logos/email.svg";
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_MAIL } from "../../consts/link";

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl w-full mx-auto p-4 md:p-8 text-white rounded-lg space-y-6">
      <p>{t("contact_intro")}</p>

      <form
        action="https://formspree.io/f/mzzgoekg"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder={t("contact_name")}
          required
          className="p-3 rounded bg-teal-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact_email")}
          required
          className="p-3 rounded bg-teal-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
        />
        <textarea
          name="message"
          rows={5}
          placeholder={t("contact_message")}
          required
          className="p-3 rounded bg-teal-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
        ></textarea>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
        >
          {t("contact_button")}
        </button>
      </form>

      <div className="flex gap-4">
        <img
          className="z-10 h-8 cursor-pointer hover:opacity-80 transition-opacity"
          src={linkedin}
          alt="LinkedIn"
          aria-label="LinkedIn profile"
          onClick={() => window.open(LINK_LINKEDIN, "_blank")}
        />
        <img
          className="z-10 h-8 cursor-pointer hover:opacity-80 transition-opacity"
          src={github}
          alt="GitHub"
          aria-label="GitHub profile"
          onClick={() => window.open(LINK_GITHUB, "_blank")}
        />
        <img
          className="z-10 h-8 cursor-pointer hover:opacity-80 transition-opacity"
          src={email}
          alt="Email"
          aria-label="Send email"
          onClick={() => window.open(LINK_MAIL, "_blank")}
        />
      </div>
    </section>
  );
};
