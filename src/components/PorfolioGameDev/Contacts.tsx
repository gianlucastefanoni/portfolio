import { forwardRef } from "react";
import { useTranslation } from "../../i18n/useTranslation";
import email from "../../assets/logos/email.svg";
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_MAIL } from "../../consts/link";

export const Contacts = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-white"
      style={{ scrollMarginTop: "50px" }}
    >
      {/* Titolo sezione */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">
          {t("contact_title")}
        </h2>
        <div className="mt-2 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
      </div>

      {/* Intro */}
      <p className="text-center text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
        {t("contact_intro")}
      </p>

      {/* Form */}
      <form
        action="https://formspree.io/f/mzzgoekg"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder={t("contact_name")}
          required
          className="w-full p-3 rounded-md bg-teal-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact_email")}
          required
          className="w-full p-3 rounded-md bg-teal-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
        />
        <textarea
          name="message"
          rows={5}
          placeholder={t("contact_message")}
          required
          className="w-full p-3 rounded-md bg-teal-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
        ></textarea>
        <div className="text-center w-full">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-md transition-colors w-full"
          >
            {t("contact_button")}
          </button>
        </div>
      </form>

      {/* Social icons */}
      <div className="mt-10 flex gap-6">
        <img
          className="h-8 cursor-pointer hover:opacity-80 transition-opacity"
          src={linkedin}
          alt="LinkedIn"
          onClick={() => window.open(LINK_LINKEDIN, "_blank")}
        />
        <img
          className="h-8 cursor-pointer hover:opacity-80 transition-opacity"
          src={github}
          alt="GitHub"
          onClick={() => window.open(LINK_GITHUB, "_blank")}
        />
        <img
          className="h-8 cursor-pointer hover:opacity-80 transition-opacity"
          src={email}
          alt="Email"
          onClick={() => window.open(LINK_MAIL, "_blank")}
        />
      </div>
    </section>
  );
});
