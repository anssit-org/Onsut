import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

export default function HomePage() {
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
        <h1>من نحن</h1>
        <div className="hm-about-content">
          <p>
            جمعية أنصت هي منظمة غير ربحية تأسست عام 2013، وتتخذ من كفر قرع مقرًا رئيسيًا لها.
            تأسست الجمعية لتكون بمثابة المرجع والعنوان الآمن للأشخاص مع عجز في السمع.
          </p>
          <p>
            تتركز مهمتها في تمكينهم، دعمهم، وتنمية قدراتهم ليكونوا جزءًا فاعلًا ومستقلًا في المجتمع.
          </p>
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
          <span className="stat-text">أشخاص تمت مساعدتهم</span>
        </div>
        <div className="hm-stat-box">
          <span className="stat-number">100+</span>
          <span className="stat-text">متطوعين</span>
        </div>
        <div className="hm-stat-box">
          <span className="stat-number">50+</span>
          <span className="stat-text">كورسات</span>
        </div>
        <div className="hm-stat-box">
          <span className="stat-number">120+</span>
          <span className="stat-text">فعاليات</span>
        </div>
      </div>

      {/* 🔽 Navigation boxes */}
      <div className="hm-nav">
        <Link to="/about" className="hm-nav-box">من نحن</Link>
        <Link to="/services" className="hm-nav-box">خدماتنا</Link>
        <Link to="/clubs" className="hm-nav-box">نادي انصت</Link>
        <Link to="/branches" className="hm-nav-box">فروعنا</Link>
        <Link to="/gallery" className="hm-nav-box">معرض النشاطات</Link>
        <Link to="/support" className="hm-nav-box">قم بدعمنا</Link>
        <Link to="/contact" className="hm-nav-box">تواصل معنا</Link>

      </div>
    </div>
  )
}
