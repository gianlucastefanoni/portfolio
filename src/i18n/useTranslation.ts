import rawTranslations from "./translations.json";
import { useLanguageStore } from "../store/useLanguageStore";

type Language = keyof typeof rawTranslations;

const translations: Record<Language, Record<string, string>> = rawTranslations;

export const useTranslation = () => {
  const { language } = useLanguageStore();

  const t = (key: string): string => {
    return translations[language][key] ?? key;
  };

  return { t };
};
