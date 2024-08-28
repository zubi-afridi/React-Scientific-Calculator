import React from "react";

const CalculatorButton = ({ label, onClick, color }) => {
  return (
    <button
      style={{
        backgroundColor: color || "white",
        color: color ? "white" : "black",
      }}
      className="w-full h-12 text-lg rounded-lg shadow-md hover:bg-gray-100 active:shadow-inner focus:outline-none"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};
export default CalculatorButton;
