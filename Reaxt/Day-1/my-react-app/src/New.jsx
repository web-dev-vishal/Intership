import React, { useState, useEffect } from "react";

function Newjsx() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const name = "React Developer";

  // 🕒 Auto-update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center max-w-md">
        <h1 className="text-4xl font-bold mb-3">
          Hello, <span className="text-yellow-300">{name}</span> 👋
        </h1>

        <p className="text-lg mb-2">
          This is an <strong>Advanced JSX</strong> example combining JavaScript + HTML + Tailwind.
        </p>

        <p className="text-xl mt-4">
          ⏰ Current Time: <span className="font-semibold text-green-300">{currentTime}</span>
        </p>

        <p className="mt-3 text-lg">
          💡 Dynamic value: <span className="text-pink-300">{5 + 3}</span> (evaluated inside JSX)
        </p>

        <button
          onClick={() => alert(`Hello ${name}! we have to Keep learning React 💪`)}
          className="mt-6 px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition"
        >
          Greet Me
        </button>
      </div>
    </div>
  );
}

export default Newjsx;