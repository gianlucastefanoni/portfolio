import { AboutMeGame } from "../components/PorfolioGameDev/AboutMeGame";
import { Hero } from "../components/PorfolioGameDev/Hero";
import { Navbar } from "../components/PorfolioGameDev/Navbar";
import { DownloadSection } from "../components/PorfolioGameDev/DownloadSection";
import { GameProjects } from "../components/PorfolioGameDev/GameProjects/GameProjects";
import { Contacts } from "../components/PorfolioGameDev/Contacts";
import { HomeButton } from "../components/HomeButton";
import { useSectionRefs } from "../hooks/usesectionRefs";

export const PortfolioGamedev = () => {
  const sectionRefs = useSectionRefs();

  return (
    <div className="game-dev-shell flex min-h-dvh flex-col font-inter text-white">
      <HomeButton />
      <Navbar sectionRefs={sectionRefs} />
      <main>
        <Hero />
        <AboutMeGame ref={sectionRefs.about} />
        <GameProjects ref={sectionRefs.projects} />
        <Contacts ref={sectionRefs.contacts} />
        <DownloadSection />
      </main>
    </div>
  );
};
