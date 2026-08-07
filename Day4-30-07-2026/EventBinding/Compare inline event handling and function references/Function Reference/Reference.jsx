import { useState } from "react";

function Reference() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 5);
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}
export default Reference;