import { useState } from "react";
import { AboutMeGame } from "../components/PorfolioGameDev/AboutMeGame";
import Hero from "../components/PorfolioGameDev/Hero";
import { Navbar } from "../components/PorfolioGameDev/Navbar";
import { DownloadSection } from "../components/PorfolioGameDev/DownloadSection";

export const PortfolioGamedev = () => {
  const [active, setActive] = useState("about");
  return (
    <div className="flex flex-col font-inter bg-black text-white min-h-dvh h-full py-8">
      <Navbar active={active} setActive={setActive} />
      {active === "about" && (
        <>
          <Hero />
          <AboutMeGame setActive={setActive} />
          <DownloadSection />
        </>
      )}
    </div>
  );
};
