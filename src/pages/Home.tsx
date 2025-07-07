import { useNavigate } from "react-router-dom";
import "../App.css";
import userIcon1 from "../assets/user-icon-1.png";
import userIcon2 from "../assets/user-icon-2.png";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-netflix-style">
      <h1 className="main-title">Stefanoni Gianluca</h1>

      <div className="profiles">
        <div
          className="profile-card"
          onClick={() => navigate("/fullstack")}
        >
          <div className="avatar">
            <img src={userIcon2} alt="Full Stack" />
          </div>
          <span>Full Stack</span>
        </div>

        <div
          className="profile-card"
          onClick={() => navigate("/gamedev")}
        >
          <div className="avatar">
            <img src={userIcon1} alt="Game Dev" />
          </div>
          <span>Game Dev</span>
        </div>
      </div>
    </div>
  );
};