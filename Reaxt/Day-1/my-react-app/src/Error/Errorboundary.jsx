import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error caught inside Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            backgroundColor: "#ffe6e6",
            padding: "20px",
            borderRadius: "8px",
            color: "red",
            textAlign: "center",
          }}
        >
          <h2>Oops! Something Went Wrong</h2>
          <p>
            Don't worry — our app is safe.
            <br />
            Try refreshing or going back.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

function StudentProfile() {
  const [marks, setMarks] = React.useState(80);
  const [showError, setShowError] = React.useState(false);

  if (showError) {
    throw new Error("❌ Something Went Wrong While Loading Student Data");
  }

  return (
    <div style={{ margin: "20px" }}>
      <h3>Student Profile</h3>
      <p>
        <b>
          Student Name: <b>Aryan Sanam</b>
        </b>
      </p>


      <button onClick={() => setMarks(marks + 5)}>
        Improve Marks ({marks})
      </button>

      <button
        style={{
          marginLeft: "10px",
          backgroundColor: "#1095a4",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setShowError(true)}
      >
        💣 Simulate Error
      </button>
    </div>
  );
}

function ErrorboundaryApp() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Error Boundary Example (Student Project)</h1>
      <p>
        Below we have a <b>Student Profile</b> component. If it fails,
        the Error Boundary will catch the problem and show a message
        instead of crashing the app.
      </p>

      <ErrorBoundary>
        <StudentProfile />
      </ErrorBoundary>

      <hr />
      <p>
        Notice: Even if <b>Student Profile</b> fails, this isn’t the app’s fault.
      </p>
    </div>
  );
}

export default ErrorboundaryApp;