import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count +10)}>Increment</button>
    </>
  );
}

export default UseState;