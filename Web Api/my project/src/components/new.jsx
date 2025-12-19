import React, { useState } from "react";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // First fetch all posts
  const getPosts = () => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIndex(0); // reset index on new fetch
      })
      .catch(() => setError("Error fetching posts"))
      .finally(() => setLoading(false));
  };

  // Show data ONE by ONE (for loop style)
  const showNextPost = () => {
    if (posts.length === 0) return;

    // For loop behavior
    for (let i = index; i < posts.length; i++) {
      setIndex(i + 1);
      break;
    }
  };

  const currentPost = posts[index - 1]; // show current post

  return (
    <div
      style={{
        width: "80%",
        margin: "40px auto",
        border: "3px solid black",
        borderRadius: "10px",
        padding: "30px",
        textAlign: "center",
      }}
    >
     
        <h2>Fetch Posts and Show One by One</h2>

      {/* Load All Data Button */}
      <button
        onClick={getPosts}
        style={{
          padding: "10px 25px",
          borderRadius: "8px",
          border: "2px solid black",
          background: "white",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Load All Data
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show ONE post at a time */}
      {currentPost && (
        <div
          style={{
            margin: "15px auto",
            padding: "15px",
            width: "80%",
            border: "2px solid black",
            borderRadius: "10px",
            background: "#f4e04d",
            textAlign: "left",
          }}
        >
          <h3>{currentPost.title}</h3>
          <p>{currentPost.body}</p>
        </div>
      )}

      {/* SUBMIT BUTTON inside the box at bottom */}
      <button
        onClick={showNextPost}
        disabled={posts.length === 0}
        style={{
          marginTop: "25px",
          padding: "10px 25px",
          borderRadius: "8px",
          border: "2px solid black",
          background: "#ffffff",
          cursor: "pointer",
        }}
      >
        Submit → Get Next Data
      </button>

      {/* If all posts shown */}
      {index >= posts.length && posts.length > 0 && (
        <p style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}>
          All posts displayed.
        </p>
      )}
    </div>
  );
}

