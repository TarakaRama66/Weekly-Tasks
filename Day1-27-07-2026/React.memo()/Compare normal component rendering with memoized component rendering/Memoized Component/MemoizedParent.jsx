import { useState } from "react";
import Child from "./Child";

function MemoizedParent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      <Child />
    </div>
  );
}

export default MemoizedParent;