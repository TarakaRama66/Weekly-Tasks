import { useReducer } from "react";

const initialState = {count: 0,};
function reducer(state, action) {
  switch (action.type) {
    case "Increase":
      return { count: state.count + 1 };
    case "Decrease":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "Increase" })}>+Increase</button>
      <button onClick={() => dispatch({ type: "Decrease" })}>-Decrease</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
export default Counter;