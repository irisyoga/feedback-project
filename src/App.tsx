import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("lightgray");

  return (
    <div className="app">
      <div className="counter" style={{ backgroundColor: color }}>
        Container color
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "lightblue" }}
          onClick={() => setColor("Blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => setColor("Green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "lightpink" }}
          onClick={() => setColor("Red")}
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
