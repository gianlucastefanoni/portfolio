import { ProjectCard } from "./PojectCard";
import collab from "../../assets/screenshots/collab.png";
import collab_full from "../../assets/screenshots/collab_full.png";
import equip from "../../assets/screenshots/equip.png";
import equip_full from "../../assets/screenshots/equip_full.png";
import tm from "../../assets/screenshots/tm.png";
import tm_full from "../../assets/screenshots/tm_full.png";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-8 py-16 px-64 items-center">
      <div className="w-fit text-center font-bold">
        <span className="text-2xl/tight text-title-orange">15+</span>
        <br />
        PROJECTS SHIPPED
      </div>
      <div className="flex gap-8">
        <ProjectCard
          src={collab}
          title={"STUDENT COLLABORATION"}
          description={
            "This platform allows university students to apply for student collaboration opportunities by submitting their skills and preferences. The BackOffice can create and publish calls, manage requests from university departments, evaluate applications, and automatically generate ranking lists."
          }
          link={collab_full}
        />
        <ProjectCard
          src={equip}
          title={"REQUEST CERTIFICATE OF EQUIVALENCE"}
          description={
            "This platform allows users to request the certificate of the equivalence of their foreign academic degree. Users can upload and download required documents, track the status of their application, and manage the payment process online."
          }
          link={equip_full}
        />
        <ProjectCard
          src={tm}
          title={"TAILOR TASK MANAGER"}
          description={
            "This platform manages custom haute couture orders, from collecting client measurements and requests to assigning tickets to tailors. It includes a calendar-based tracking system to monitor delivery timelines, manage delays, and streamline the production workflow."
          }
          link={tm_full}
        />
      </div>
    </div>
  );
};
