import UseCounter from "./UseCounter";

function CounterApp() {
  const { count, increment, decrement, reset } = UseCounter(10);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default CounterApp;