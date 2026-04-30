import { useTranslation } from "../../i18n/useTranslation";
import { LanguageSwitcher } from "../LanguageSwitcher";

type NavbarProps = {
  sectionRefs: Record<string, React.RefObject<HTMLElement>>;
};

export const Navbar = ({ sectionRefs }: NavbarProps) => {
  const { t } = useTranslation();

  const links = [
    { id: "about", label: "about_title" },
    { id: "projects", label: "projects_title" },
    { id: "contacts", label: "contact_title" },
  ];

  const handleScroll = (id: string) => {
    const ref = sectionRefs[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="game-navbar">
      <div className="game-navbar-inner">
        <button
          className="game-navbar-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("nav_back_top")}
        >
          <span>{t("nav_status")}</span>
          <strong>Gianluca Stefanoni</strong>
        </button>

        <nav className="game-navbar-nav" aria-label={t("nav_primary")}>
          {links.map(({ id, label }) => (
            <button key={id} onClick={() => handleScroll(id)}>
              {t(label)}
            </button>
          ))}
        </nav>

        <div className="game-navbar-actions">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
