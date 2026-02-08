import "../styles/Taskbar.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function Taskbar({ lang, setLang }: Props) {
  return (
    <div className="taskbar">
      {/* RIGHT */}
      <div className="right">
        <div className="logoText">
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="text">
            <div className="title">{t(lang, "taskbar.title.name")}</div>
            <div className="subtitle">{t(lang, "taskbar.title.subtitle")}</div>
          </div>
        </div>
      </div>

      {/* CENTER */}
      <nav className="nav">
        <a href="/">{t(lang, "taskbar.nav.home")}</a>
        <a href="/about">{t(lang, "taskbar.nav.about")}</a>
        <a href="/services">{t(lang, "taskbar.nav.services")}</a>
        <a href="/clubs">{t(lang, "taskbar.nav.clubs")}</a>
        <a href="/branches">{t(lang, "taskbar.nav.branches")}</a>
        {/*<a href="/gallery">{t(lang, "taskbar.nav.gallery")}</a>*/}
        <a href="/support">{t(lang, "taskbar.nav.support")}</a>
        <a href="/contact">{t(lang, "taskbar.nav.contact")}</a>
      </nav>

      {/* LEFT */}
      <div className="left">
        <div className="lang-switch">
          <button
            className={lang === "ar" ? "active" : ""}
            onClick={() => setLang("ar")}
          >
            AR
          </button>
          <button
            className={lang === "he" ? "active" : ""}
            onClick={() => setLang("he")}
          >
            HE
          </button>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>

        <div className="social">
          <a href="https://www.facebook.com/onsut1">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/onsut_kafr_qara/#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
