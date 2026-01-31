import { Link } from 'react-router-dom'
import '../styles/HomePage.css'
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
};


export default function HomePage({ lang }: Props) {
  return (
    <div className="homepage">
      {/* Hero */}
      <div className="hero">
        <img
          src="/logo.png"
          alt="Organization hero"
          className="hero-image"
        />
      </div>

      {/* About */}
      <div className="hm-about-us">
        <h1>{t(lang, "home.about.title")}</h1>
        <div className="hm-about-content">
          <p>{t(lang, "home.about.subtitle1")}</p>
          <p>{t(lang, "home.about.subtitle2")}</p>
        </div>
      </div>

      {/* Activity image */}
      <div className="hero">
        <img
          src="/activity.jpg"
          alt="Activities"
          className="hero-image"
        />
      </div>

      {/* Stats */}
      <div className="hm-stats">
        <div className="hm-stat-box">
          <span className="stat-number">1500+</span>
          <span className="stat-text">{t(lang, "home.stats.helped")}</span>
        </div>
        <div className="hm-stat-box">
          <span className="stat-number">100+</span>
          <span className="stat-text">{t(lang, "home.stats.volunteers")}</span>
        </div>
        <div className="hm-stat-box">
          <span className="stat-number">50+</span>
          <span className="stat-text">{t(lang, "home.stats.courses")}</span>
        </div>
        <div className="hm-stat-box">
          <span className="stat-number">120+</span>
          <span className="stat-text">{t(lang, "home.stats.events")}</span>
        </div>
      </div>

      {/* 🔽 Navigation boxes */}
      <div className="hm-nav">
        <Link to="/about" className="hm-nav-box">{t(lang, "taskbar.nav.about")}</Link>
        <Link to="/services" className="hm-nav-box">{t(lang, "taskbar.nav.services")}</Link>
        <Link to="/clubs" className="hm-nav-box">{t(lang, "taskbar.nav.clubs")}</Link>
        <Link to="/branches" className="hm-nav-box">{t(lang, "taskbar.nav.branches")}</Link>
        <Link to="/gallery" className="hm-nav-box">{t(lang, "taskbar.nav.gallery")}</Link>
        <Link to="/support" className="hm-nav-box">{t(lang, "taskbar.nav.support")}</Link>
        <Link to="/contact" className="hm-nav-box">{t(lang, "taskbar.nav.contact")}</Link>

      </div>
    </div>
  )
}
