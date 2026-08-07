import { useMemo, useState } from "react";

function WithMemo() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("No Calulation");
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }
    return total;
  }, []);
  return (
    <>
      <h2>Result: {result}</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 10)}>Increment</button>
    </>
  );
}
export default WithMemo;