import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;