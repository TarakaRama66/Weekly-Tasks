import { useReducer } from "react";
// Initial state
const initialState = {
  count: 0,
  message: "Welcome",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        message: "Count increased",
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        message: "Count decreased",
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Task1App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>useReducer Example</h1>

      <h2>Count: {state.count}</h2>

      <p>{state.message}</p>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}

export default Task1App;