import { useState, useEffect } from "react";
import "../styles/Services.css";
import { t } from "../i18n/Translations"; // your translation helper
import type { Lang } from "../App";
//import CourseRegisterForm from "../components/CourseRegisterForm";
type Service = {
  id: string;
  title: string;
  description: string;
  img: string;
};

type Props = {
  lang: Lang;
};

export default function Services({ lang }: Props) {
  const [services, setServices] = useState<Service[]>([]);
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    // Load translations dynamically
    import(`../i18n/${lang}.json`).then((module) => {
      setServices(module.services.list);
    });
  }, [lang]);

  return (
    <div className={`services-page ${lang === "ar" || lang === "he" ? "rtl" : "ltr"}`}>
      <h1 className="services-title">{t(lang, "services.title")}</h1>

      {selected && (
        <div className="services-display">
          {/*<img src={selected.img} alt={selected.title} />*/}
          <p>{selected.description}</p>
        </div>
      )}
      {/*selected?.id == "15" && (
        <CourseRegisterForm lang={lang}/>
      )*/}
      <div className="services-buttons">
        {services.map((s, idx) => (
          <button
            key={idx}
            className={`service-btn ${selected === s ? "active" : ""}`}
            onClick={() => setSelected(s)}
          >
            {s.title}
          </button>
        ))}
      </div>
      
    </div>
  );
}
