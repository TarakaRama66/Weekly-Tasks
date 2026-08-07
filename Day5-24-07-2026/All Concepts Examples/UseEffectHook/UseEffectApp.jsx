import { useEffect, useState } from "react";

function UseEffectApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Rendered");
  }, []);

  return (
    <div>
        <h1>UseEffect Hook</h1>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default UseEffectApp;