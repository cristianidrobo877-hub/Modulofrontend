import { useState } from "react";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      if (display.includes("/0")) {
        setDisplay("Error: división por 0");
        return;
      }
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => setDisplay("");

  return (
    <div className="calculator">
      <div className="screen">{display || "0"}</div>

      <div className="buttons">
        <button onClick={clear} className="clear">borrar</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>

        <button onClick={calculate} className="equal">=</button>

        <button onClick={() => handleClick("0")} className="zero">0</button>
      </div>
    </div>
  );
}
