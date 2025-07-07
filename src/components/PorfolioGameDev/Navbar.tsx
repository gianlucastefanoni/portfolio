import { useTranslation } from "../../i18n/useTranslation";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Navbar = ({ sectionRefs }: any) => {
  const { t } = useTranslation();
  const links = [
    { id: "about", label: "about_title" },
    { id: "projects", label: "projects_title" },
    { id: "contacts", label: "contact_title" },
  ];

  const handleScroll = (id: string | number) => {
    const ref = sectionRefs[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sm:sticky sm:top-0 sm:z-50 bg-teal-950/80 backdrop-blur-md border-b border-teal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <nav>
          <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            {links.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className="uppercase text-sm tracking-wider text-emerald-400 hover:text-white transition-colors"
                >
                  {t(label)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
