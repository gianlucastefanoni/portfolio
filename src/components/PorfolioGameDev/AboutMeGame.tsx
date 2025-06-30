import { useTranslation } from "../../i18n/useTranslation";

interface AboutMeGameProps {
  setActive: (s: string) => void;
}

export const AboutMeGame = ({ setActive }: AboutMeGameProps) => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 bg-teal-950 rounded-lg text-white mt-4">
      <div className="bg-teal-900 p-4 rounded-md w-fit mb-6 text-sm sm:text-base">
        <em>
          “Great things in business are never done by one person. They’re done
          by a team of people.”
        </em>
        <br />
        <div className="text-emerald-400 font-bold mt-1">Steve Jobs.</div>
      </div>

      <div className="text-base sm:text-lg leading-relaxed">
        👋 {t("greeting")}&nbsp;
        <span className="text-emerald-400 font-semibold text-lg sm:text-xl">
          Game Developer.
        </span>
        &nbsp;{t("greeting_details_1")}
        <br />
        {t("greeting_details_2")}
        <br />
        {t("head_list")}
        <ul className="list-disc list-inside space-y-2 my-4 ml-4 sm:ml-6 text-gray-300">
          <li>🎨 {t("list_1")}</li>
          <li>💻 {t("list_2")}</li>
          <li>🤝 {t("list_3")}</li>
        </ul>
        ✨ {t("tail_list")}
      </div>
      <div className="mt-6">
        <div
          onClick={() => setActive("projects")}
          className="text-emerald-400 underline hover:text-emerald-300 cursor-pointer w-fit"
        >
          {t("explore_projects")}
        </div>
      </div>
    </section>
  );
};
