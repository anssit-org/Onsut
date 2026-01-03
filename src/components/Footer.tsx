import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} جمعية أُصمت — جميع الحقوق محفوظة
        </span>
      </div>
    </footer>
  );
};