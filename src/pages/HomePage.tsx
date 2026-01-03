import React from 'react'
import '../styles/Homepage.css'

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <img
          src="/logo.png"
          alt="Organization hero"
          className="hero-image"
        />
      </div>
      <div className='hm-about-us'>
        <h1>من نحن</h1>
            <div className="hm-about-content">
                <p>
									جمعية أنصت هي منظمة غير ربحية تأسست عام 2013، وتتخذ من كفر قرع مقرًا رئيسيًا لها. تأسست الجمعية لتكون بمثابة المرجع والعنوان الآمن للأشخاص مع عجز في السمع (الصم وثقيلي السمع)
                </p>
								<p>
									تتلخص مهمتها الأساسية في توفير الدعم اللازم لتلبية احتياجاتهم، وتمكينهم من معرفة حقوقهم، والعمل على تنمية قدراتهم الكامنة ليصبحوا جزءًا فاعلاً ومستقلاً في المجتمع
								</p>
            </div>
      </div>
			<div className="hero">
        <img
          src="/activity.jpg"
          alt="Organization hero"
          className="hero-image"
        />
      </div>
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
    </div>
  )
}
