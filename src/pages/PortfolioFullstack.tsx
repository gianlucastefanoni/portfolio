import { AboutMe } from "../components/PortfolioFullstack/AboutMe";
import { FullstackHeader } from "../components/PortfolioFullstack/FullstackHeader";
import { Projects } from "../components/PortfolioFullstack/Projects";
import { TechSkills } from "../components/PortfolioFullstack/TechSkills";

export const PortfolioFullstack = () => {
  return (
    <div className="flex flex-col font-inter bg-black text-white">
      <FullstackHeader />
      <AboutMe />
      <TechSkills />
      <Projects />
    </div>
  );
};
