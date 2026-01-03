import React, { useState } from "react";
import "../styles/CourseRegisterForm.css";

export default function CourseRegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    birthDate: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("يجب الموافقة على الشروط أولاً");
      return;
    }

    console.log("Form submitted:", formData);
    // TODO: send to backend
  };

  return (
    <div className="form-wrapper" dir="rtl">
      <h2 className="form-title">التسجيل لدورة لغة الإشارة</h2>

      <form className="modern-form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="الاسم الأول"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="اسم العائلة"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
            <input
                type="tel"
                name="phone"
                placeholder="الهاتف"
                value={formData.phone}
                onChange={handleChange}
                required
            />
        </div>
        
        <div className="row">
            <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        
        <div className="row">
            <input
                type="text"
                name="address"
                placeholder="العنوان"
                value={formData.address}
                onChange={handleChange}
            />
        </div>
        
        <div className="row">
            <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
            />
        </div>
        

        <label className="checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>أوافق على شروط التسجيل والتواصل معي</span>
        </label>

        <button type="submit">تسجيل للدورة الآن</button>
      </form>
    </div>
  );
};