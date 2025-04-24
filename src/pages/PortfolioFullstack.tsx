import { AboutMe } from "../components/PortfolioFullstack/AboutMe";
import { FullstackHeader } from "../components/PortfolioFullstack/FullstackHeader";

export const PortfolioFullstack = () => {
  return (
    <div className="flex flex-col font-inter bg-black text-white">
      <FullstackHeader />
      <AboutMe />
    </div>
  );
};
