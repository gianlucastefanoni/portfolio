import { forwardRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "../../../i18n/useTranslation";

const projectIds = ["polar", "kickerz", "tank"];

export const GameProjects = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const orderedProjects = expandedId
    ? [expandedId, ...projectIds.filter((id) => id !== expandedId)]
    : projectIds;
  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-white"
      style={{ scrollMarginTop: "50px" }}
    >
      {/* Titolo sezione */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">
          {t("projects_title")}
        </h2>
        <div className="mt-2 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
      </div>

      {/* Descrizione */}
      <p className="text-center text-gray-300 text-sm sm:text-base max-w-4xl mx-auto mb-8 leading-relaxed">
        {t("projects_description")}
      </p>

      {/* Cards */}
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap justify-center items-stretch">
        {orderedProjects.map((id) => (
          <ProjectCard
            key={id}
            id={id}
            isExpanded={expandedId === id}
            onClick={() =>
              setExpandedId(expandedId === id ? null : id)
            }
          />
        ))}
      </div>
    </section>
  );
});
