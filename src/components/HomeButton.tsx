import { useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n/useTranslation";
import "../App.css";

export const HomeButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className="home-return-button"
      onClick={() => navigate("/")}
      aria-label={t("home_return")}
    >
      <span>←</span>
      {t("home_return")}
    </button>
  );
};
