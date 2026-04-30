import { useTranslation } from "../../i18n/useTranslation";

interface ProjectCardProps {
  index: number;
  src: string;
  title: string;
  description: string;
  meta: string;
  link: string;
}

export const ProjectCard = ({
  index,
  src,
  title,
  description,
  meta,
  link,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="fullstack-project-card">
      <button
        className="fullstack-project-image"
        onClick={() => window.open(link, "_blank")}
        aria-label={`${t("fullstack_open_project")} ${title}`}
      >
        <img src={src} alt={title} />
        <span>{String(index).padStart(2, "0")}</span>
      </button>

      <div className="fullstack-project-content">
        <p>{meta}</p>
        <h3>{title}</h3>
        <span>{description}</span>

        <button onClick={() => window.open(link, "_blank")}>
          {t("fullstack_open_project")}
        </button>
      </div>
    </article>
  );
};
