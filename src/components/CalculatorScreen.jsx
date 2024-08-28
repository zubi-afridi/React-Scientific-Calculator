import React from "react";

const CalculatorScreen = ({ value }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="0"
      readOnly
      className="w-full h-16 mb-4 text-2xl text-right p-4 rounded-lg bg-gray-200 shadow-inner"
    />
  );
};
export default CalculatorScreen;
