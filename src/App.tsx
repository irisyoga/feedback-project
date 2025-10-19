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
          onClick={() => setColor("lightblue")}
        >
          Light Blue
        </button>
        <button
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => setColor("lightgreen")}
        >
          Light Green
        </button>
        <button
          style={{ backgroundColor: "lightpink" }}
          onClick={() => setColor("lightpink")}
        >
          Light Red
        </button>
      </div>
    </div>
  );
}

export default App;
