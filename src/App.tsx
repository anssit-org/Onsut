import './App.css'
import Taskbar from './components/Taskbar'
import CourseRegisterForm from './components/CourseRegisterForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Taskbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/services" element={<div>services</div>} />
        <Route path="/clubs" element={<div>clubs</div>} />
        <Route path="/branches" element={<div>branches</div>} />
        <Route path="/gallery" element={<div>gallery</div>} />
        <Route path="/support" element={<div>support</div>} />
        <Route path="/contact" element={<div>contact</div>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
