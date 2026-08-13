import { useState, useCallback } from "react";
import Child from "./Child";
import useToggle from "./useToggle";

function ReactMemoApp() {
  const [count, setCount] = useState(0);
  const [isOn, toggle] = useToggle();

  const handleGreet = useCallback(() => {alert("Hello Gupta!");}, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <hr></hr>
      <h1>Status: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Toggle Status</button>

      <hr></hr>

      <Child
        name="Gupta"
        onGreet={handleGreet}/>
    </>
  );
}
export default ReactMemoApp;