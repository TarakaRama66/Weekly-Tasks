import { memo } from "react";

const Counter = memo(function Counter({ count, onIncrement }) {
  console.log("Counter rendered");

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={onIncrement}>Increment Counter</button>
    </div>
  );
});

export default Counter;