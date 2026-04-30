import { useNavigate } from "react-router-dom";
import "../App.css";
import userIcon1 from "../assets/user-icon-1.png";
import userIcon2 from "../assets/user-icon-2.png";

export const Home = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      title: "Full Stack",
      subtitle: "Web apps, products, interfaces",
      image: userIcon2,
      route: "/fullstack",
      className: "home-profile-fullstack",
    },
    {
      title: "Game Dev",
      subtitle: "Gameplay, systems, worlds",
      image: userIcon1,
      route: "/gamedev",
      className: "home-profile-gamedev",
    },
  ];

  return (
    <main className="home-selection">
      <div className="home-selection-header">
        <p>Choose your path</p>
        <h1>Stefanoni Gianluca</h1>
      </div>

      <section className="home-profile-grid" aria-label="Portfolio profiles">
        {profiles.map((profile) => (
          <button
            key={profile.title}
            className={`home-profile-card ${profile.className}`}
            onClick={() => navigate(profile.route)}
          >

            <div className="home-profile-copy">
              <span>{profile.subtitle}</span>
              <strong>{profile.title}</strong>
            </div>
          </button>
        ))}
      </section>
    </main>
  );
};
