import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const New2 = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Styling Approaches in React</h1>

      <h2>Using Regular CSS</h2>
      <button className="css-button">Click me (CSS)</button>

      <h2>Using Styled Components</h2>
      <StyledButton>Click me (Styled Components)</StyledButton>
    </div>
  );
};

export default New2;

