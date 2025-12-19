import React, { useState } from "react";

function PersonalDetails({ userData = {}, setUserData }) {
  const [tempData, setTempData] = useState({
    name: userData.name || "",
    age: userData.age || "",
    email: userData.email || "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(tempData);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>📔Enter Your Personal Details</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={tempData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={tempData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
        />

        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={tempData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p style={{ color: "green" }}>
          ✅ Details saved! Go to the Contact page to view data.
        </p>
      )}
    </div>
  );
}

export default PersonalDetails;

