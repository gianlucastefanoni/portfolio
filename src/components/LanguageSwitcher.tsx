import { useLanguageStore } from "../store/useLanguageStore";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "it")}
        className="bg-teal-950 text-white border border-teal-700 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none pr-8"
      >
        <option value="en">🇬🇧 English</option>
        <option value="it">🇮🇹 Italiano</option>
      </select>
    </div>
  );
};
