import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/CourseRegisterForm.css";
import { t } from "../i18n/Translations";
import type { Lang } from "../App";

type Props = {
  lang: Lang;
};

const SERVICE_ID = "service_hmlwdq8";
const TEMPLATE_ID = "template_ox4ojlr";
const PUBLIC_KEY = "z_99BQGqjhYfz92SX";

export default function CourseRegisterForm({ lang }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    agree: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert(t(lang, "courseRegisterForm.agreeAlert"));
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address || "—",
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", address: "", agree: false });
      alert(t(lang, "courseRegisterForm.successMessage")); // 👈 add this
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      alert(t(lang, "courseRegisterForm.errorMessage")); // 👈 add this
    }
  };

  return (
    <div className="form-wrapper" dir={lang === "ar" || lang === "he" ? "rtl" : "ltr"}>
      <h2 className="form-title">{t(lang, "courseRegisterForm.title")}</h2>


      <form ref={formRef} className="modern-form" onSubmit={handleSubmit}>
        <div className="row">
          <input type="text"  name="firstName" placeholder={t(lang, "courseRegisterForm.firstName")} value={formData.firstName} onChange={handleChange} required />
          <input type="text"  name="lastName"  placeholder={t(lang, "courseRegisterForm.lastName")}  value={formData.lastName}  onChange={handleChange} required />
        </div>
        <div className="row">
          <input type="tel"   name="phone"     placeholder={t(lang, "courseRegisterForm.phone")}     value={formData.phone}     onChange={handleChange} required />
        </div>
        <div className="row">
          <input type="email" name="email"     placeholder={t(lang, "courseRegisterForm.email")}     value={formData.email}     onChange={handleChange} required />
        </div>
        <div className="row">
          <input type="text"  name="address"   placeholder={t(lang, "courseRegisterForm.address")}   value={formData.address}   onChange={handleChange} />
        </div>
        <label className="checkbox">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          <span>{t(lang, "courseRegisterForm.agree")}</span>
        </label>
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "..." : t(lang, "courseRegisterForm.submit")}
        </button>
      </form>
    </div>
  );
}