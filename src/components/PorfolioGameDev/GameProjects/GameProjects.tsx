import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "../../../i18n/useTranslation";

const projectIds = ["polar", "kickerz", "tank"];

export const GameProjects: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <>
      <h1 className="mx-auto w-6xl font-light mt-8">
        {t("projects_description")}
      </h1>
      <section className="flex flex-col md:flex-row gap-6 justify-center items-stretch p-8">
        {projectIds.map((id) => (
          <ProjectCard
            key={id}
            id={id}
            isExpanded={expandedId === id}
            onClick={() => setExpandedId(expandedId === id ? null : id)}
          />
        ))}
      </section>
    </>
  );
};
