import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-dvh w-dvw bg-black text-white !p-4 flex flex-col">
      <div className="w-full text-5xl text-center font-bebas">
        Stefanoni Gianluca
      </div>
      <div className="w-full h-2/3 flex justify-around items-center">
        <div
          className="cursor-pointer"
          onClick={() => navigate("/portfolio/fullstack")}
        >
          Full Stack Developer
        </div>
        <div
          className="cursor-pointer"
          onClick={() => navigate("/portfolio/gamedev/aboutme")}
        >
          Game Developer
        </div>
      </div>
    </div>
  );
};
