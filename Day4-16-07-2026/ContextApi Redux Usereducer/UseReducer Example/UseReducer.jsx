import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 5 };

    case "decrement":
      return { count: state.count - 5 };

    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <h1>UseReducer Example</h1>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        + Increase
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        - Decrease
      </button>
    </>
  );
}

export default UseReducer;