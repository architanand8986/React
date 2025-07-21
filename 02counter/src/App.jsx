import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// let counter = 5;

// function addValue() {
//   counter++;
//   console.log("Counter after addition:", counter);
// }

// function removeValue() {
//   counter--;
//   console.log("Counter after removal:", counter);
// }

function App() {
  let [counter, setCounter] = useState(0); // Initialize counter with 5(its a hook)

  // let counter = 5;

  const addValue = () => {
    if (counter >= 20) {
      alert("Counter cannot be greater than 20");
      return;
    }
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("Counter cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Lets do it...</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
