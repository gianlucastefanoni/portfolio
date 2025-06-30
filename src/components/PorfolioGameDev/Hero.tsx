import React from "react";
import profileImg from "../../assets/profile.png";
import { useTranslation } from "../../i18n/useTranslation";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex items-center justify-center text-white p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl shadow-lg overflow-hidden rounded-2xl">
        <div className="relative w-full sm:w-1/2 h-64 sm:h-96">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-gray-900 to-transparent" />
        </div>

        <div className="flex flex-col justify-center text-center sm:text-right p-4 sm:p-8 w-full sm:w-1/2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight uppercase leading-tight">
            Gianluca <br /> Stefanoni
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 sm:mt-6 sm:w-2/3 sm:ml-auto">
            {t("game_developer")}
          </p>
        </div>
      </div>
    </section>
  );
};
