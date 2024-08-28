import React from "react";
import CalculatorButton from "./CalculatorButton";

const CalculatorButtonPanel = ({ onButtonClick }) => {
  const buttons = [
    { label: "CE", color: "#ff3399" },
    { label: "x!" },
    { label: "(" },
    { label: ")" },
    { label: "%" },
    { label: "AC", color: "#33cc33" },
    { label: "sin" },
    { label: "π" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "÷" },
    { label: "cos" },
    { label: "log" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "×" },
    { label: "tan" },
    { label: "√" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "-" },
    { label: "e" },
    { label: "x²" },
    { label: "0" },
    { label: "." },
    { label: "=", color: "#33ccff" },
    { label: "+" },
  ];
  return (
    <div className="grid grid-cols-6 gap-2">
      {buttons.map((button, index) => (
        <CalculatorButton
          key={index}
          label={button.label}
          onClick={onButtonClick}
          color={button.color}
        />
      ))}
    </div>
  );
};
export default CalculatorButtonPanel;
