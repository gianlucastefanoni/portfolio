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
import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css";

const skills = [
  { label: "TypeScript", src: ts, href: LINK_TS, tone: "warm" },
  { label: "React", src: react, href: LINK_REACT, tone: "cool" },
  { label: "Angular", src: angular, href: LINK_ANGULAR, tone: "hot" },
  { label: "Vite", src: vite, href: LINK_GITHUB, tone: "cool" },
  { label: "GitHub", src: github, href: LINK_GITHUB, tone: "neutral" },
  { label: "C#", src: csharp, href: LINK_CSHARP, tone: "cool" },
  { label: "Java", src: java, href: LINK_JAVA, tone: "warm" },
  { label: "SQL", src: sqldev, href: LINK_SQLDEV, tone: "neutral" },
  { label: "Figma", src: figma, href: LINK_FIGMA, tone: "hot" },
];

export const TechSkills = () => {
  const { t } = useTranslation();

  return (
    <section className="fullstack-skills">
      <div className="fullstack-section-heading">
        <p>{t("fullstack_skills_kicker")}</p>
        <h2>{t("fullstack_skills_title")}</h2>
      </div>

      <div className="fullstack-skills-layout">
        <div className="fullstack-skills-copy">
          <span>{t("fullstack_skills_count")}</span>
          <p>{t("fullstack_skills_description")}</p>
        </div>

        <div className="fullstack-skill-grid">
          {skills.map((skill, index) => (
            <button
              key={skill.label}
              className={`fullstack-skill-card ${skill.tone}`}
              style={{ animationDelay: `${index * 70}ms` }}
              onClick={() => window.open(skill.href, "_blank")}
              aria-label={`${t("fullstack_open_skill")} ${skill.label}`}
            >
              <img src={skill.src} alt="" />
              <strong>{skill.label}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
