import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="footer-top">
        {/* Right: Navigation */}
        <nav className="footer-nav">
          <a href="/">الرئيسية</a>
          <a href="/about">من نحن</a>
          <a href="/services">خدماتنا</a>
          <a href="/clubs">نادي انصت</a>
          <a href="/branches">مراكزنا وفروعنا</a>
          <a href="/gallery">معرض النشاطات</a>
          <a href="/support">قم بدعمنا</a>
          <a href="/contact">تواصل معنا</a>
        </nav>

        {/* Left: Social icons */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/onsut1"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/onsut_kafr_qara/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} جمعية أُصمت — جميع الحقوق محفوظة
        </span>
      </div>
    </footer>
  );
};