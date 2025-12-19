import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/question/Home";
import About from "./components/question/About";
import Contact from "./components/question/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
