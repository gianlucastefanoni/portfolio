import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "../../i18n/useTranslation";

interface NavbarProps {
  active: string;
  setActive: (s: string) => void;
}

export const Navbar = ({ active, setActive }: NavbarProps) => {
  const { t } = useTranslation();
  const links = [
    { id: "about", label: "about_title" },
    { id: "projects", label: "projects_title" },
    { id: "contacts", label: "contact_title" },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4 sm:px-8 gap-4 mb-4">
      <nav className="w-full sm:w-fit mx-auto bg-teal-950 p-4 sm:p-6 rounded-lg">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12 list-none m-0 p-0">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setActive(id);
                }}
                className={`uppercase px-4 py-2 rounded-md text-emerald-400 hover:underline cursor-pointer
                transition-colors duration-300 ease-in-out
                ${active === id ? "bg-teal-900" : "bg-transparent"}`}
              >
                {t(label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sm:self-center">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
