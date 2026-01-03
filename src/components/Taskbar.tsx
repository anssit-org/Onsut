import "../styles/Taskbar.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


export default function Taskbar() {
  
  return (
  <div className="taskbar" dir="rtl">
    <div className="right">
        <div className="logoText">
            <img src="/logo.png" alt="Logo" className="logo" />
            <div className="text">
                <div className="title">جمعية أُصمت</div>
                <div className="subtitle">جمعية قطرية للنهوض بالصم وثقيلي السمع</div>
            </div>
            
        </div>
    </div>


    <nav className="nav">
        <a href="/">الرئيسية</a>
        <a href="/about">من نحن</a>
        <a href="/services">خدماتنا</a>
        <a href="/clubs">نادي انصت</a>
        <a href="/branches">مراكزنا وفروعنا</a>
        <a href="/gallery">معرض النشاطات</a>
        <a href="/support">قم بدعمنا</a>
        <a href="/contact">تواصل معنا</a>
    </nav>


    <div className="left">
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
};