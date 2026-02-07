import React, { useState } from "react";
import "../styles/CourseRegisterForm.css";
import { t } from "../i18n/Translations"; // your translation helper
import type { Lang } from "../App";

type Props = {
  lang: Lang;
};

export default function CourseRegisterForm({ lang }: Props) {
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
      alert(t(lang, "courseRegisterForm.agreeAlert"));
      return;
    }

    console.log("Form submitted:", formData);
    // TODO: send to backend
  };

  return (
    <div className="form-wrapper" dir={lang === "ar" || lang === "he" ? "rtl" : "ltr"}>
      <h2 className="form-title">{t(lang, "courseRegisterForm.title")}</h2>

      <form className="modern-form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder={t(lang, "courseRegisterForm.firstName")}
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder={t(lang, "courseRegisterForm.lastName")}
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <input
            type="tel"
            name="phone"
            placeholder={t(lang, "courseRegisterForm.phone")}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <input
            type="email"
            name="email"
            placeholder={t(lang, "courseRegisterForm.email")}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <input
            type="text"
            name="address"
            placeholder={t(lang, "courseRegisterForm.address")}
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="date"
            name="birthDate"
            placeholder={t(lang, "courseRegisterForm.birthDate")}
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
          <span>{t(lang, "courseRegisterForm.agree")}</span>
        </label>

        <button type="submit">{t(lang, "courseRegisterForm.submit")}</button>
      </form>
    </div>
  );
}
