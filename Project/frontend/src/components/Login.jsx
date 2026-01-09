// const { useState } = require("react");

// function Login({ onLogin }) {
//   const [username, setUsername] = useState("");

//   const handleLogin = () => {
//     if (username.trim() === "") {
//       alert("Please enter name");
//       return;
//     }
//     onLogin();
//   };

//   return (
//     <div className="container">
//       <h2>Student Login</h2>

//       <input
//         type="text"
//         placeholder="Enter Student Name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login


import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") {
      alert("Please enter name");
      return;
    }
    onLogin();
  };

  return (
    <div className="container">
      <h2>Student Login</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
