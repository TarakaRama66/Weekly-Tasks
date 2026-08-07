import { useContext } from "react";
import CounterContext from "./CounterContext";

function GrandChild() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <h1>ContextAPI Example</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default GrandChild;