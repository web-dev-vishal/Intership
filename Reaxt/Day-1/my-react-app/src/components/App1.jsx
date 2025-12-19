import React, { Component } from "react";

// Functional Component
function WelcomeFunctional() {
  return (
    <>
      <h2>Hello From Second File</h2>
      <h2>Hello from Function Component</h2>
    </>
  );
}

// Class Component
class WelcomeClass extends Component {
  render() {
    return <h2>Hello from Class Component</h2>;
    
  }
}

// Main Component combining both
function App1component() {
  return (
    <div>
      <h1 className="bg-green-500">Welcome to App1 Component</h1>
      <WelcomeFunctional />
      <WelcomeClass />
    </div>
  );
}

export default App1component;
