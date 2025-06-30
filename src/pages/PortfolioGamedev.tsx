import { useState } from "react";
import { AboutMeGame } from "../components/PorfolioGameDev/AboutMeGame";
import { Hero } from "../components/PorfolioGameDev/Hero";
import { Navbar } from "../components/PorfolioGameDev/Navbar";
import { DownloadSection } from "../components/PorfolioGameDev/DownloadSection";
import { GameProjects } from "../components/PorfolioGameDev/GameProjects/GameProjects";
import { Contacts } from "../components/PorfolioGameDev/Contacts";

export const PortfolioGamedev = () => {
  const [active, setActive] = useState("about");
  return (
    <div className="flex flex-col font-inter bg-black text-white min-h-dvh h-full py-8 px-4 sm:px-8">
      <Navbar active={active} setActive={setActive} />
      {active === "about" && (
        <>
          <Hero />
          <AboutMeGame setActive={setActive} />
        </>
      )}
      {active === "projects" && (
        <>
          <GameProjects />
        </>
      )}
      {active === "contacts" && (
        <>
          <Contacts />
        </>
      )}
      <DownloadSection />
    </div>
  );
};
