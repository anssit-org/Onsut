import React from "react";
import "../styles/Taskbar.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const Taskbar: React.FC = () => {
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
      <a href="#">الرئيسية</a>
      <a href="#">من نحن</a>
      <a href="#">خدماتنا</a>
      <a href="#">نادي انصت</a>
      <a href="#">مراكزنا وفروعنا</a>
      <a href="#">معرض النشاطات</a>
      <a href="#">قم بدعمنا</a>
      <a href="#">تواصل معنا</a>
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


export default Taskbar;