import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `flex-1 py-6 text-xl font-medium text-center border-r border-gray-800
   hover:bg-orange-200 ${isActive ? "bg-orange-300" : ""}`;

export default function Contact() {
  return (
    <div className="h-screen bg-orange-100 p-8">
      <nav className="border-4 border-gray-800 bg-orange-50 flex mb-8">
        <NavLink to="/" className={navClass}>Home</NavLink>
        <NavLink to="/about" className={navClass}>About</NavLink>
        <NavLink to="/contact" className={navClass}>Contact</NavLink>
      </nav>

      <div className="border-4 border-gray-800 bg-white p-10 text-4xl font-bold text-center">
        Contact Page
      </div>
    </div>
  );
}
