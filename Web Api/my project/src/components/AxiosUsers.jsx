import React, { useState } from "react";
import axios from "axios";

export default function AxiosUser() {
  const [userState, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function getUsersUsingAxios() {
    try {
      setLoading(true);
      setErrorMessage("");
      setUserData([]);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUserData(response.data);
    } catch (error) {
      setErrorMessage("Error loading users: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios API Example - Users List</h2>

      <button onClick={getUsersUsingAxios}>Load Users (Axios)</button>

      {loading && <p>Loading...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {userState.map((user) => (
        <div
          key={user.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid #e07f0fff",
          }}
        >
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      ))}
    </div>
  );
}
