import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Taskbar from "./components/Taskbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SupportUs from "./pages/SupportUs";
export type Lang = "ar" | "he" | "en";

function App() {
  // 🌍 Global language state (default Arabic)
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "ar";
  });

  // 🔄 Update document direction, language & persist choice
  useEffect(() => {
    const isRTL = lang === "ar" || lang === "he";

    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <BrowserRouter>
      <div className="page-layout">
        <Taskbar lang={lang} setLang={setLang} />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage lang={lang}/>} />
            <Route path="/about" element={<AboutUs lang={lang}/>} />
            <Route path="/services" element={<div>services</div>} />
            <Route path="/clubs" element={<div>clubs</div>} />
            <Route path="/branches" element={<div>branches</div>} />
            <Route path="/gallery" element={<div>gallery</div>} />
            <Route path="/support" element={<div><SupportUs lang={lang}/></div>} />
            <Route path="/contact" element={<div><ContactUs lang={lang}/></div>} />
          </Routes>
        </main>

        <Footer lang={lang}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
