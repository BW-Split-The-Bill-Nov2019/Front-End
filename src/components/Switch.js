import React from "react";
import "../App.css";

const date = Date.now();

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-${Date.now()}`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-${Date.now()}`}
        style={{ background: isOn && "#06D6A0" }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
