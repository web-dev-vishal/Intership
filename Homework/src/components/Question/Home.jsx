import { NavLink } from "react-router-dom";
import { useState } from "react";

const navClass = ({ isActive }) =>
  `flex-1 py-6 text-xl font-medium text-center border-r border-gray-800
   hover:bg-orange-200 ${isActive ? "bg-orange-300" : ""}`;

export default function Home() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-screen bg-orange-100 p-8 flex flex-col gap-6">
      {/* NAVBAR */}
      <nav className="border-4 border-gray-800 bg-orange-50 flex">
        <NavLink to="/" className={navClass}>Home</NavLink>
        <NavLink to="/about" className={navClass}>About</NavLink>
        <NavLink to="/contact" className={navClass}>Contact</NavLink>
      </nav>

      {/* CENTER CONTENT */}
      <div className="flex flex-1 justify-center">
        <div className="w-80 flex flex-col gap-6">
          {/* IMAGE BOX */}
          <div className="border-4 border-gray-800 h-64 bg-white flex items-center justify-center">
            {image ? (
              <img src={image} className="w-full h-full object-cover" />
            ) : (
              <label className="cursor-pointer text-gray-400 text-3xl">
                IMAGE
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>

          <div className="h-1 bg-gray-800"></div>
          <div className="h-1 bg-gray-800"></div>
          <div className="border-4 border-gray-800 rounded-2xl h-20"></div>
        </div>
      </div>
    </div>
  );
}
