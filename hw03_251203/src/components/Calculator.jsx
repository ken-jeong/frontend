// components/Calculator.jsx
import { useState } from "react";

function Calculator() {
    // React Hooks - const [state, setState] = useState(초기값);
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        setDisplay(display + value);
    };

    const handleClear = () => {
        setDisplay("");
    };

    const handleEqual = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (e) {
            setDisplay("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">{display || "0"}</div>
            <div className="buttons">
                {["7", "8", "9", "/"].map(v => <button key={v} onClick={() => handleClick(v)}>{v}</button>)}
                {["4", "5", "6", "*"].map(v => <button key={v} onClick={() => handleClick(v)}>{v}</button>)}
                {["1", "2", "3", "-"].map(v => <button key={v} onClick={() => handleClick(v)}>{v}</button>)}
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={() => handleClick("+")}>+</button>
            </div>
        </div>
    );
}

export default Calculator;