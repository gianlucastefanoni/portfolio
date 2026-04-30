import { ProjectCard } from "./ProjectCard";
import collab from "../../assets/screenshots/collab.png";
import collabFull from "../../assets/screenshots/collab_full.png";
import equip from "../../assets/screenshots/equip.png";
import equipFull from "../../assets/screenshots/equip_full.png";
import tm from "../../assets/screenshots/tm.png";
import tmFull from "../../assets/screenshots/tm_full.png";
import { useTranslation } from "../../i18n/useTranslation";
import "../../App.css";

const projects = [
  {
    id: "collab",
    src: collab,
    link: collabFull,
    titleKey: "fullstack_project_collab_title",
    descriptionKey: "fullstack_project_collab_description",
    metaKey: "fullstack_project_collab_meta",
  },
  {
    id: "equip",
    src: equip,
    link: equipFull,
    titleKey: "fullstack_project_equip_title",
    descriptionKey: "fullstack_project_equip_description",
    metaKey: "fullstack_project_equip_meta",
  },
  {
    id: "tm",
    src: tm,
    link: tmFull,
    titleKey: "fullstack_project_tm_title",
    descriptionKey: "fullstack_project_tm_description",
    metaKey: "fullstack_project_tm_meta",
  },
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="fullstack-projects" className="fullstack-projects">
      <div className="fullstack-section-heading">
        <p>{t("fullstack_projects_kicker")}</p>
        <h2>{t("projects_title")}</h2>
      </div>

      <div className="fullstack-projects-intro">
        <span>{t("fullstack_projects_count")}</span>
        <p>{t("fullstack_projects_description")}</p>
      </div>

      <div className="fullstack-project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index + 1}
            src={project.src}
            title={t(project.titleKey)}
            description={t(project.descriptionKey)}
            meta={t(project.metaKey)}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
