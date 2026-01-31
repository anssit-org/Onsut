import "../styles/Footer.css";
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
};

export default function Footer({ lang }: Props) {
  return (
    <footer className="site-footer" dir={lang === "ar" || lang === "he" ? "rtl" : "ltr"}>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {t(lang, "footer.organization")} — {t(lang, "footer.rights")}
        </span>
      </div>
    </footer>
  );
}
