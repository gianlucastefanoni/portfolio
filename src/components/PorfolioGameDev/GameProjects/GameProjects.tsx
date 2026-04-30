import { forwardRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "../../../i18n/useTranslation";
import "../../../App.css";

const projectIds = ["ants", "polar", "tank"];

export const GameProjects = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>("ants");

  const orderedProjects = expandedId
    ? [expandedId, ...projectIds.filter((id) => id !== expandedId)]
    : projectIds;

  return (
    <section
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-14 text-white sm:px-6"
      style={{ scrollMarginTop: "72px" }}
    >
      <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
            {t("game_projects_eyebrow")}
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t("projects_title")}
          </h2>
        </div>

        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:justify-self-end">
          {t("projects_description")}
        </p>
      </div>

      <div className="grid gap-5">
        {orderedProjects.map((id, index) => (
          <ProjectCard
            key={id}
            id={id}
            number={index + 1}
            isExpanded={expandedId === id}
            onClick={() => setExpandedId(expandedId === id ? null : id)}
          />
        ))}
      </div>
    </section>
  );
});
