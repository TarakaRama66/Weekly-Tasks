import { useState } from "react";
import Child from "./Child";

function NormalParent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 5)}>Increment</button>

      <Child />
    </>
  );
}

export default NormalParent;