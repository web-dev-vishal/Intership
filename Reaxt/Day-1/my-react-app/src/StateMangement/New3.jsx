import React, { createContext, useContext, useState } from "react";

function LocalStateExample() {
  const [marks, setMarks] = useState(80);

  return (
    <div style={boxStyle}>
      <h2>1. Local State (useState)</h2>
      <p>Student Marks: {marks}</p>
      <button onClick={() => setMarks(marks + 5)}>Add 5 Marks</button>
      <p>Example: Data is private to this component only</p>
    </div>
  );
}

function Grandchild({ studentName }) {
  return (
    <div style={subBox}>
      <p>Grandchild got name: {studentName}</p>
    </div>
  );
}

function Child({ studentName }) {
  return (
    <div style={subBox}>
      <p>Child received and passed the name forward: {studentName}</p>
      <Grandchild studentName={studentName} />
    </div>
  );
}

function PropsDrillinging() {
  const studentName = "Aryan Sanam";
  return (
    <div style={boxStyle}>
      <h2>2. Props Drilling</h2>
      <p>Teacher passed student name → Child → Grandchild</p>
      <Child studentName={studentName} />
      <p>Example: Like a teacher sending info through a chain of people</p>
    </div>
  );
}

const SchoolContext = createContext();

function ContextProviderExample() {
  const [student, setStudent] = useState({
    name: "Yash Patil",
    attendance: 90,
  });

  return (
    <SchoolContext.Provider value={{ student, setStudent }}>
      <div style={boxStyle}>
        <h2>3. Context API</h2>
        <p>
          This is like a School Board — everyone (child components)
          can read/write the same data directly.
        </p>
        <StudentProfile />
        <AttendanceUpdate />
      </div>
    </SchoolContext.Provider>
  );
}

function StudentProfile() {
  const { student } = useContext(SchoolContext);

  return (
    <div style={subBox}>
      <p>Name: {student.name}</p>
      <p>Attendance: {student.attendance}%</p>
    </div>
  );
}

function AttendanceUpdate() {
  const { student, setStudent } = useContext(SchoolContext);

  return (
    <div style={subBox}>
      <button
        onClick={() =>
          setStudent({
            ...student,
            attendance: student.attendance + 1,
          })
        }
      >
        Add 1% Attendance
      </button>
      <p>Everyone using this notice board sees the change instantly</p>
    </div>
  );
}

function StateManagement() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>State Management Approaches</h1>
      <p>
        Let's see how data can be stored and shared between components in React.
      </p>

      <LocalStateExample />
      <PropsDrillinging />
      <ContextProviderExample />
    </div>
  );
}

const boxStyle = {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding:"15px",
    marginButtom: "20px",
    background: "#2a2928fd",
}

const subBox={
    background: "#ec8c1eff",
    margin:"10px",
    padding:"10px",
    borderRadius:"8px"
}

export default StateManagement;