import { useState } from "react";

function Task7App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1>React Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase
      </button>

      <button onClick={decreaseCount}>
        Decrease
      </button>

      <button onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Task7App;