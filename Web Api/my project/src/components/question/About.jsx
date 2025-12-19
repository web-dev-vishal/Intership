import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="h-screen bg-orange-100 p-8">
      <nav className="border-4 border-gray-800 bg-orange-50 flex mb-8">
        <NavLink to="/" className="nav-btn">Home</NavLink>
        <NavLink to="/about" className="nav-btn">About</NavLink>
        <NavLink to="/contact" className="nav-btn">Contact</NavLink>
      </nav>

      <div className="border-4 border-gray-800 bg-white p-10 text-3xl font-bold text-center">
        About Page
      </div>
    </div>
  );
}
