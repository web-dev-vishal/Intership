import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import PersonalDetails from "./components/PersonalDetalis.jsx";
import Contact from "./components/Contact.jsx";
import "./student.css"

function Students() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
  });

  return (
    <Router>
      <div className="project-container">
        <h1>Practice Project 1: React</h1>

        <nav style={{ marginBottom: "" }}>
          <Link to="/" style={{ marginRight: "" }}>
            Home
          </Link>
          <Link to="/personal" style={{ marginRight: "" }}>
            Personal Details
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/personal"
            element={
              <PersonalDetails userData={userData} setUserData={setUserData} />
            }
          />
          <Route path="/contact" element={<Contact userData={userData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Students;