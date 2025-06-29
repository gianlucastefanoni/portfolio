import React from "react";
import profileImg from "../../assets/profile.png"; // aggiorna il path se necessario
import { useTranslation } from "../../i18n/useTranslation";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex items-center justify-center text-white p-8">
      <div className="flex w-6xl shadow-lg overflow-hidden rounded-2xl justify-between">
        <div className="relative w-1/2 h-96">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent" />
        </div>
        <div className="text-right">
          <div className="text-9xl font-extralight uppercase">
            Gianluca <br /> Stefanoni
          </div>
          <div className="p-4 w-2/3 ml-auto">{t("game_developer")}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
