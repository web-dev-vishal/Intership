import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./RouterPages/Home";
import About from "./RouterPages/About"
import Contact from "./RouterPages/Contact"

export default function New1jsx() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: 20 }}>
        <h2>REACT ROUTER BASICS</h2>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ margin: 10 }}>Home</Link>
          <Link to="/about" style={{ margin: 10 }}>About</Link>
          <Link to="/contact" style={{ margin: 10 }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}