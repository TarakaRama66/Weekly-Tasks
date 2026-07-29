import React from "react";

function Counter({ count, setCount }) {
  console.log("Counter Rendered");
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
export default React.memo(Counter);

//React.memo