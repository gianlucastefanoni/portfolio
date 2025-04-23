import bg from "../assets/bg.jpg";
import name from "../assets/STEFANONI_GIANLUCA.png";
import email from "../assets/logos/email.svg";
import github from "../assets/logos/github.svg";
import linkedin from "../assets/logos/linkedin.svg";

export const PortfolioFullstack = () => {
  return (
    <div className="w-dvw flex flex-col font-inter">
      <div
        className="h-dvh bg-cover bg-center !p-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute z-0 h-dvh inset-0 bg-gradient-to-b from-black/0 to-black/100" />
        <div className="h-full z-10 flex flex-col justify-between items-center">
          <img
            className="z-10"
            src={name}
            alt="Stefanoni Gianluca"
            style={{ height: "204px", width: "549px" }}
          />
          <div className="z-10 flex flex-col gap-3 items-center">
            <div className="text-title-orange text-3xl">
              Full Stack Developer
            </div>
            <div className="flex gap-2">
              <img
                className="z-10"
                src={linkedin}
                alt="linkedin"
                style={{ height: "32px" }}
              />
              <img
                className="z-10"
                src={github}
                alt="github"
                style={{ height: "32px" }}
              />
              <img
                className="z-10"
                src={email}
                alt="email"
                style={{ height: "32px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
