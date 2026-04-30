import { AboutMe } from "../components/PortfolioFullstack/AboutMe";
import { FullstackContacts } from "../components/PortfolioFullstack/FullstackContacts";
import { FullstackDownloadSection } from "../components/PortfolioFullstack/FullstackDownloadSection";
import { FullstackHeader } from "../components/PortfolioFullstack/FullstackHeader";
import { Projects } from "../components/PortfolioFullstack/Projects";
import { TechSkills } from "../components/PortfolioFullstack/TechSkills";
import { HomeButton } from "../components/HomeButton";

export const PortfolioFullstack = () => {
  return (
    <div className="fullstack-shell flex min-h-dvh flex-col font-inter text-white">
      <HomeButton />
      <FullstackHeader />
      <main>
        <AboutMe />
        <TechSkills />
        <Projects />
        <FullstackContacts />
        <FullstackDownloadSection />
      </main>
    </div>
  );
};
