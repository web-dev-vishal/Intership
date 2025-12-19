import { useState } from "react";

export default function FetchUsers() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function getUserFromApi() {
    setLoading(true);
    setErrorMessage("");
    setUsersData([]);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load users from server");
        }
        return response.json();
      })
      .then((data) => setUsersData(data))
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  }

  function getUserswithPromise() {
    setLoading(true);
    setErrorMessage("");
    setUsersData([]);

    const url = "https://jsonplaceholder.typicode.com/users";

    const promise = new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject(new Error("Server returned error"));
          } else {
            return response.json();
          }
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });

    promise
      .then((data) => setUsersData(data))
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>fetch API + Custom Promise using URL</h2>

      <button onClick={getUserFromApi}>Load Users (Fetch Promise)</button>
      <br />
      <br />
      <button onClick={getUserswithPromise}>Load Users (Promise Method)</button>

      {loading && <p>Loading users...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {usersData.map((user) => (
        <div
          key={user.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid #ddd",
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
