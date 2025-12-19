import { NavLink } from "react-router-dom";
import { useState } from "react";

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
      {/* TOP NAVBAR */}
      <nav className="border-4 border-gray-800 bg-orange-50 flex">
        <NavLink to="/" className="nav-btn">Home</NavLink>
        <NavLink to="/about" className="nav-btn">About</NavLink>
        <NavLink to="/contact" className="nav-btn">Contact</NavLink>
      </nav>

      {/* CENTER CONTENT */}
      <div className="flex flex-1 justify-center">
        <div className="w-80 flex flex-col gap-6">
          {/* IMAGE */}
          <div className="border-4 border-gray-800 h-64 bg-white flex items-center justify-center">
            {image ? (
              <img src={image} className="w-full h-full object-cover" />
            ) : (
              <label className="cursor-pointer text-gray-400 text-3xl">
                IMAGE
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
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
