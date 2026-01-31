import "../styles/SupportUs.css"
import type { Lang } from "../App";
import { t } from "../i18n/Translations";
import { useNavigate } from "react-router-dom";

type Props = {
  lang: Lang;
};

function SupportUs({ lang }: Props) {
  const navigate = useNavigate();

  return (
    <div className="su-page">
      {/* Hero */}
      <section className="su-hero">
        <h1 className="su-title">{t(lang, "support.title")}</h1>
        <p className="su-subtitle">{t(lang, "support.subtitle")}</p>
      </section>

      {/* Volunteer */}
      <section className="su-section">
        <h2 className="su-section-title">{t(lang, "support.volunteer.title")}</h2>
        <p className="su-text">{t(lang, "support.volunteer.description")}</p>

        <ul className="su-list">
          <li>{t(lang, "support.volunteer.points.0")}</li>
          <li>{t(lang, "support.volunteer.points.1")}</li>
          <li>{t(lang, "support.volunteer.points.2")}</li>
        </ul>

        <button className="su-button"
        onClick={() => navigate("/contact")}>
          {t(lang, "support.volunteer.cta")}
        </button>
      </section>

      {/* Partnerships */}
      <section className="su-section su-alt-bg">
        <h2 className="su-section-title">{t(lang, "support.partnerships.title")}</h2>
        <p className="su-text">{t(lang, "support.partnerships.description")}</p>

        <ul className="su-list">
          <li>{t(lang, "support.partnerships.points.0")}</li>
          <li>{t(lang, "support.partnerships.points.1")}</li>
          <li>{t(lang, "support.partnerships.points.2")}</li>
        </ul>

        <button className="su-button"
        onClick={() => navigate("/contact")}>
          {t(lang,"support.partnerships.cta")}
        </button>
      </section>

      {/* Field Trips / Hosting */}
      <section className="su-section">
        <h2 className="su-section-title">{t(lang, "support.hosting.title")}</h2>
        <p className="su-text">{t(lang, "support.hosting.description")}</p>

        <ul className="su-list">
          <li>{t(lang, "support.hosting.points.0")}</li>
          <li>{t(lang, "support.hosting.points.1")}</li>
          <li>{t(lang, "support.hosting.points.2")}</li>
        </ul>

        <button className="su-button"
        onClick={() => navigate("/contact")}>
          {t(lang, "support.hosting.cta")}
        </button>
      </section>
    </div>
  )
}

export default SupportUs
