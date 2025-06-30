import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "../../../i18n/useTranslation";

const projectIds = ["polar", "kickerz", "tank"];

export const GameProjects: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="px-4 sm:px-8 py-8">
      <h1 className="max-w-4xl mx-auto text-lg sm:text-xl font-light mb-6 text-gray-300 text-center sm:text-left">
        {t("projects_description")}
      </h1>

      <section className="flex flex-col gap-6 md:flex-row md:flex-wrap justify-center items-center">
        {projectIds.map((id) => (
          <ProjectCard
            key={id}
            id={id}
            isExpanded={expandedId === id}
            onClick={() => setExpandedId(expandedId === id ? null : id)}
          />
        ))}
      </section>
    </div>
  );
};
