import '../styles/AboutUs.css'
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
};

export default function AboutUs({ lang }: Props) {
  const isLTR = lang === "en"; // English = LTR
  return (
    <div className="au-page">
      <div className={`au-container ${isLTR ? "ltr" : "rtl"}`} dir={isLTR ? "ltr" : "rtl"}>
        <div className="au-content">
          <h1 className="au-title">{t(lang, "about.org.title")}</h1>

          <p>{t(lang, "about.org.paragraph1")}</p>
          <p>{t(lang, "about.org.paragraph2")}</p>
          <p>{t(lang, "about.org.paragraph3")}</p>

          <h2 className="au-subtitle">{t(lang, "about.founder.title")}</h2>

          <div className={`au-founder ${isLTR ? "ltr" : "rtl"}`}>
            <div className="au-founder-photo">
              <img src="/founder.jpg" alt="Founder"/>
              <span className="au-founder-name">{t(lang, "about.founder.name")}</span>
              <span className="au-founder-role">{t(lang, "about.founder.position")}</span>
            </div>

            <div className="au-founder-text">
              <p>"{t(lang, "about.founder.subtitle")}"</p>
              <p>{t(lang, "about.founder.paragraph")}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
