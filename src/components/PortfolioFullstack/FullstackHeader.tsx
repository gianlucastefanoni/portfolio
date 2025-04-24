import bg from "../../assets/bg.jpg";
import name from "../../assets/STEFANONI_GIANLUCA.png";
import email from "../../assets/logos/email.svg";
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_MAIL } from "../../consts/link";

export const FullstackHeader = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center !p-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute z-0 h-screen inset-0 bg-gradient-to-b from-black/0 to-black/100" />
      <div className="h-full z-10 flex flex-col justify-between items-center">
        <img
          className="z-10"
          src={name}
          alt="Stefanoni Gianluca"
          style={{ height: "204px", width: "549px" }}
        />
        <div className="z-10 flex flex-col gap-3 items-center">
          <div className="text-title-orange text-3xl">Full Stack Developer</div>
          <div className="flex gap-2">
            <img
              className="z-10 h-8 cursor-pointer"
              src={linkedin}
              alt="linkedin"
              onClick={() => window.open(LINK_LINKEDIN, "blank_")}
            />
            <img
              className="z-10 h-8 cursor-pointer"
              src={github}
              alt="github"
              onClick={() => window.open(LINK_GITHUB, "blank_")}
            />
            <img
              className="z-10 h-8 cursor-pointer"
              src={email}
              alt="email"
              onClick={() => window.open(LINK_MAIL, "blank_")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
