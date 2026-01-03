import './App.css'
import Taskbar from './components/Taskbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CourseRegisterForm from './components/CourseRegisterForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
function App() {

  return (
    <div className="page-layout">

      <Taskbar/>
      <main className="page-content">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/services" element={<div>services</div>} />
          <Route path="/clubs" element={<div>clubs</div>} />
          <Route path="/branches" element={<div>branches</div>} />
          <Route path="/gallery" element={<div>gallery</div>} />
          <Route path="/support" element={<div>support</div>} />
          <Route path="/contact" element={<div>contact</div>} />
        </Routes>
        </BrowserRouter>
      </main>
      
      <Footer/>
    </div>
  )
}

export default App
