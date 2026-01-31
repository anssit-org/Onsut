import "../styles/Clubs.css";
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
};

function Clubs({ lang }: Props) {
  return (
    <div className="sc-page">
      {/* Hero */}
      <section className="sc-hero">
        <h1 className="sc-title">
          {t(lang, "clubs.general.title")}
        </h1>
        <p className="sc-subtitle">
          {t(lang, "clubs.general.subtitle")}
        </p>
      </section>

      {/* About */}
      <section className="sc-about">
        <h2 className="sc-title">
          {t(lang, "clubs.general.aboutTitle")}
        </h2>
        <p className="sc-text">
          {t(lang, "clubs.general.aboutText")}
        </p>
      </section>

      {/* Goals */}
      <section className="sc-section">
        <h2 className="sc-title">
          {t(lang, "clubs.general.goalsTitle")}
        </h2>

        <ul className="sc-list">
          <li>{t(lang, "clubs.general.goals.0")}</li>
          <li>{t(lang, "clubs.general.goals.1")}</li>
          <li>{t(lang, "clubs.general.goals.2")}</li>
          <li>{t(lang, "clubs.general.goals.3")}</li>
          <li>{t(lang, "clubs.general.goals.4")}</li>
        </ul>
      </section>

      {/* Activities */}
      <section className="sc-section">
        <h2 className="sc-title">
          {t(lang, "clubs.general.activitiesTitle")}
        </h2>

        <ul className="sc-list">
          <li>{t(lang, "clubs.general.activities.0")}</li>
          <li>{t(lang, "clubs.general.activities.1")}</li>
          <li>{t(lang, "clubs.general.activities.2")}</li>
          <li>{t(lang, "clubs.general.activities.3")}</li>
          <li>{t(lang, "clubs.general.activities.4")}</li>
        </ul>
      </section>

      {/* Schedule */}
      <section className="sc-section">
        <h2 className="sc-title">
          {t(lang, "clubs.general.scheduleTitle")}
        </h2>
        <p className="sc-text">
          {t(lang, "clubs.general.scheduleText")}
        </p>
      </section>
    </div>
  );
}

export default Clubs;
