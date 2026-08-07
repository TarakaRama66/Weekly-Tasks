import { useState } from "react";
import Child from "./Child";

function WithApp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Parent Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 20)}>Increment</button>
      <Child />
    </>
  );
}
export default WithApp;