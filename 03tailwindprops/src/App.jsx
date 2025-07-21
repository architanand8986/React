import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "chaiaurcode",
    age: 20,
  };

  let arr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-violet-500">Tailwind css</h1>
      <Card username="chaiaurcode" someObj={arr} />
      <Card username="Archit" />
    </>
  );
}

export default App;
