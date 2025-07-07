import { AboutMeGame } from "../components/PorfolioGameDev/AboutMeGame";
import { Hero } from "../components/PorfolioGameDev/Hero";
import { Navbar } from "../components/PorfolioGameDev/Navbar";
import { DownloadSection } from "../components/PorfolioGameDev/DownloadSection";
import { GameProjects } from "../components/PorfolioGameDev/GameProjects/GameProjects";
import { Contacts } from "../components/PorfolioGameDev/Contacts";
import { useSectionRefs } from "../hooks/usesectionRefs";

export const PortfolioGamedev = () => {
  const sectionRefs = useSectionRefs();
  return (
    <div className="flex flex-col font-inter bg-black text-white min-h-dvh h-full">
      <Navbar sectionRefs={sectionRefs} />
      <Hero />
      <AboutMeGame ref={sectionRefs.about} />
      <GameProjects ref={sectionRefs.projects}/>
      <Contacts ref={sectionRefs.contacts}/>
      <DownloadSection />
    </div>
  );
};
