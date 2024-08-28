import React, { useState } from "react";
import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorButtonPanel from "./components/CalculatorButtonPanel";
import { evaluate, pi, e, factorial, square } from "mathjs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const App = () => {
  const [screenValue, setScreenValue] = useState("");

  const handleClick = (value) => {
    try {
      switch (value) {
        case "AC":
          setScreenValue("");
          break;
        case "CE":
          setScreenValue(screenValue.slice(0, -1));
          break;
        case "=":
          let expression = screenValue;

          // Automatically close any unmatched parentheses before evaluating
          const openParenthesesCount = (expression.match(/\(/g) || []).length;
          const closeParenthesesCount = (expression.match(/\)/g) || []).length;
          if (openParenthesesCount > closeParenthesesCount) {
            expression += ")".repeat(openParenthesesCount - closeParenthesesCount);
          }

          // Replace the square root symbol with the appropriate mathjs function
          expression = expression.replace(/√/g, 'sqrt');

          const newValue = evaluate(expression);
          setScreenValue(newValue.toString());
          break;
        case "π":
          setScreenValue(screenValue + pi.toString());
          break;
        case "e":
          setScreenValue(screenValue + e.toString());
          break;
        case "x!":
          const factorialValue = factorial(evaluate(screenValue));
          setScreenValue(factorialValue.toString());
          break;
        case "sin":
        case "cos":
        case "tan":
        case "log":
          // Append the function with an open parenthesis
          setScreenValue(screenValue + `${value}(`);
          break;
        case "√":
          // Directly append the square root function name
          setScreenValue(screenValue + "√(");
          break;
        case "x²":
          const squareValue = square(evaluate(screenValue));
          setScreenValue(squareValue.toString());
          break;
        default:
          const mappedValue = value === "×" ? "*" : value === "÷" ? "/" : value;
          setScreenValue(screenValue + mappedValue);
          break;
      }
    } catch (error) {
      let errorMessage = "Error";
      if (error.message.includes("undefined")) {
        errorMessage = "Invalid input.";
      } else if (error.message.includes("divide")) {
        errorMessage = "Division by zero.";
      } else if (error.message.includes("syntax")) {
        errorMessage = "Syntax error.";
      }
      setScreenValue(errorMessage);
      setTimeout(() => {
        setScreenValue("");
      }, 2000);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <CalculatorScreen value={screenValue} />
        <CalculatorButtonPanel onButtonClick={handleClick} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
