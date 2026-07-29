import { useState } from "react";

function WithouMemo() {
  const [count, setCount] = useState(0);

  function slowFunction() {
    console.log("Calculating...");
    let total = 0;

    for (let i = 0; i < 100; i++) {
      total += i;
    }
    return total;
  }
  const result = slowFunction();
  return (
    <>
      <h2>Result: {result}</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 5)}>Increment</button>
    </>
  );
}
export default WithouMemo;