import React, { useEffect } from "react";

function Contact({ userData }) {
  useEffect(() => {}, []);

  return (
    <div>
      <h2>📞Contact Info</h2>

      {userData && userData.name ? (
        <div className="contact-box">
          <p>
            <b>Name:</b> {userData.name}
          </p>
          <p>
            <b>Age:</b> {userData.age}
          </p>
          <p>
            <b>Email:</b> {userData.email}
          </p>
        </div>
      ) : (
        <p style={{ color: "red" }}>
          No details found. Please fill out the form on the Personal Details
          page.
        </p>
      )}
    </div>
  );
}

export default Contact;

