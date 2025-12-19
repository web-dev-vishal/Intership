import { useState } from "react";

export function PostFetchUsers() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function fetchPosts() {
    setLoading(true);
    setErrorMessage("");
    setPosts([]);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load posts");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch Posts API</h2>

      <button onClick={fetchPosts}>Load Posts</button>

      {loading && <p>Loading posts...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {posts.map((item) => (
        <div
          key={item.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            
          }}
        >
          <p>
            <strong>Title:</strong> {item.title}
          </p>
          <p>
            <strong>Body:</strong> {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostFetchUsers;