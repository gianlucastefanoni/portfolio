import React from "react";
import profileImg from "../../assets/profile.png";
import { useTranslation } from "../../i18n/useTranslation";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex items-center justify-center text-white px-4 sm:px-8 py-12">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl overflow-hidden rounded-2xl border border-teal-800 bg-teal-950/70 backdrop-blur-md shadow-md">

        {/* Immagine */}
        <div className="relative w-full sm:w-1/2 h-64 sm:h-96">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-black/70 to-transparent" />
        </div>

        {/* Testo */}
        <div className="flex flex-col justify-center text-center sm:text-right p-6 sm:p-10 w-full sm:w-1/2">
          <p className="text-emerald-400 uppercase tracking-widest text-sm mb-2">
            Portfolio
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Gianluca <br className="hidden sm:block" /> Stefanoni
          </h1>

          <p className="text-sm sm:text-base text-gray-300 mt-4 sm:mt-6 sm:w-3/4 sm:ml-auto">
            {t("game_developer")}
          </p>
        </div>
      </div>
    </section>

  );
};
