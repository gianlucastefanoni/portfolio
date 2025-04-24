interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <img
        className="cursor-pointer"
        style={{ height: "250px", width: "250px" }}
        src={src}
        alt={title}
        onClick={() => window.open(link, "blank_")}
      />
      <div className="font-bold">{title}</div>
      <div className="text-center">{description}</div>
    </div>
  );
};
