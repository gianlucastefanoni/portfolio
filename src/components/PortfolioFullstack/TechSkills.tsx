import github from "../../assets/logos/github.svg";
import ts from "../../assets/logos/typescript-svgrepo-com.svg";
import react from "../../assets/logos/react-svgrepo-com.svg";
import angular from "../../assets/logos/angular-svgrepo-com.svg";
import vite from "../../assets/logos/vite-svgrepo-com.svg";
import csharp from "../../assets/logos/csharp-svgrepo-com.svg";
import java from "../../assets/logos/java-svgrepo-com.svg";
import sqldev from "../../assets/logos/Oracle_SQL_Developer-Logo.wine.svg";
import figma from "../../assets/logos/figma-svgrepo-com.svg";
import {
  LINK_ANGULAR,
  LINK_CSHARP,
  LINK_FIGMA,
  LINK_GITHUB,
  LINK_JAVA,
  LINK_REACT,
  LINK_SQLDEV,
  LINK_TS,
} from "../../consts/link";

export const TechSkills = () => {
  return (
    <div className="flex flex-col gap-8 p-16 items-center">
      <div className="w-fit text-center font-bold">
        <span className="text-2xl/tight text-title-orange">20+</span>
        <br />
        TECH SKILLS
      </div>
      <div className="w-fit flex gap-8">
        <img
          className="h-16 cursor-pointer"
          src={ts}
          alt="TypeScript"
          onClick={() => window.open(LINK_TS, "blank_")}
        />
        <img
          className="h-16 cursor-pointer"
          src={react}
          alt="React"
          onClick={() => window.open(LINK_REACT, "blank_")}
        />
        <img
          className="h-16 cursor-pointer"
          src={angular}
          alt="Angular"
          onClick={() => window.open(LINK_ANGULAR, "blank_")}
        />
        <img
          className="h-16 cursor-pointer"
          src={vite}
          alt="Vite"
          onClick={() => window.open(LINK_GITHUB, "blank_")}
        />
        <img
          className="h-16 cursor-pointer"
          src={github}
          alt="github"
          onClick={() => window.open(LINK_GITHUB, "blank_")}
        />
      </div>
      <div className="w-fit flex gap-8">
        <img
          className="h-16 cursor-pointer"
          src={csharp}
          alt="C#"
          onClick={() => window.open(LINK_CSHARP, "blank_")}
        />
        <img
          className="h-14 p-1 bg-white rounded-lg cursor-pointer"
          src={java}
          alt="Java"
          onClick={() => window.open(LINK_JAVA, "blank_")}
        />
        <img
          className="h-16 cursor-pointer"
          src={sqldev}
          alt="Oracle SQL Developer"
          onClick={() => window.open(LINK_SQLDEV, "blank_")}
        />
        <img
          className="h-16 cursor-pointer"
          src={figma}
          alt="Figma"
          onClick={() => window.open(LINK_FIGMA, "blank_")}
        />
      </div>
    </div>
  );
};
