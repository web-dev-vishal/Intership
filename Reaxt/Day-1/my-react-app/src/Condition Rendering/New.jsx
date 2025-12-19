import React, { useState } from "react";

function App_Conditionrendering() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const fruits = ["Apple", "Jackfruit", "Mango"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}, Number: ${number}`);
    setName("");
    setNumber("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Conditional Rendering</h1>

      {loggedIn ? <p>Welcome Back!</p> : <p>Please Log In</p>}

      <button
        onClick={() => setLoggedIn(!loggedIn)}
        style={{
          backgroundColor: loggedIn ? "#e63946" : "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {loggedIn ? "Logout" : "Login"}
      </button>

      <h2>Fruit List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#1c1b1bff",
              margin: "5px auto",
              padding: "10px",
              width: "150px",
              borderRadius: "5px",
            }}
          >
            {fruit}
          </li>
        ))}
      </ul>

      <h2>Submit Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #1c1b1bff",
          }}
          required
        />

        <input
          type="number"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #1c1b1bff",
          }}
          required
        />

        <button
          type="submit"
          style={{
            display: "block",
            margin: "10px auto",
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App_Conditionrendering;
