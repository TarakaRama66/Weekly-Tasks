import { useState } from "react";
import Child from "./Child";

function WithoutCallback() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <>
    <h1>WithoutCallback</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
}
export default WithoutCallback;