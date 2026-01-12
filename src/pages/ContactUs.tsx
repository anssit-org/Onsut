import "../styles/ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaFax } from "react-icons/fa";
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
};

export default function ContactUs({ lang }: Props) {
  return (
    <div className={`contact-page ${lang === "en" ? "ltr" : "rtl"}`}>
      <div className="contact-header">
        <h1>{t(lang, "contact.title")}</h1>
        <p>{t(lang, "contact.subtitle")}</p>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h2>{t(lang, "contact.phone")}</h2>
          <p>052-796578</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>{t(lang, "contact.email")}</h2>
          <p>info@ansit.com</p>
        </div>

        <div className="contact-card">
          <FaFax className="contact-icon" />
          <h2>{t(lang, "contact.fax")}</h2>
          <p>049593570</p>
        </div>
      </div>
    </div>
  );
}
