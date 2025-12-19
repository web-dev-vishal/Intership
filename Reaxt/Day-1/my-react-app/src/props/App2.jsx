import React, { useState } from "react";

function Greeting({ name }) {
  return (
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">
      Hello, {name}! 👋
    </h2>
  );
}

function App2() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-10 shadow-2xl text-center">
        <Greeting name="React Student" />

        <p className="text-lg mb-4">
          You clicked the button <span className="font-bold">{count}</span>{" "}
          {count === 1 ? "time" : "times"}.
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Click Me 🚀
        </button>
      </div>
    </div>
  );
}

export default App2;