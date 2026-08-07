import { useState } from "react";

function IncreaseCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 10);
  }

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={increase}>Increment</button>
    </>
  );
}
export default IncreaseCounter;