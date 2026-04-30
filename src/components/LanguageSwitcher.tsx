import { useTranslation } from "../i18n/useTranslation";
import { useLanguageStore } from "../store/useLanguageStore";

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguageStore();

  return (
    <label className="game-language-switcher">
      <span className="sr-only">{t("language_label")}</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "it")}
        aria-label={t("language_label")}
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </label>
  );
};
