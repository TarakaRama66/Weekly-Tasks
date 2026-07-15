import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 10 };

    case "Decrement":
      return { count: state.count - 10 };

    case "Reset":
      return { count: 0 };

    default:
      return state;
  }
}

function Dispatch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>Implement Dispatch Functionality</h1>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
export default Dispatch;