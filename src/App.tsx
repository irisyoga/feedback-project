
import { useState } from "react";
import MyButton from "./components/MyButton/MyButton";
import "./App.css";

function App() {
  const [color, setColor] = useState("lightgray");

  return (
    <div className="app">
      <div className="counter" style={{ backgroundColor: color }}>
        Container color
      </div>
      <div className="buttons">
        <MyButton variant="danger" onClick={() => setColor("red")}>
          Red
        </MyButton>

        <MyButton variant="success" onClick={() => setColor("green")}>
          Green
        </MyButton>

        <MyButton variant="primary" onClick={() => setColor("blue")}>
          Blue
        </MyButton>
      </div>
    </div>
  );
}

export default App;
