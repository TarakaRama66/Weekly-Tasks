import { useReducer, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThemeContext from "./ThemeContext";
import { increment, decrement } from "./counterSlice";

//useReducer
const initialState = {
  name: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

//Redux Component
function ReduxCounter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux Counter : {count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <hr />
    </>
  );
}

//Context Component
function Theme() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h2>Theme : {theme}</h2>
      <hr />
    </>
  );
}

//Main App
function StateApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value="Dark">
      <div>

        <h1>React State Management</h1>

        {/* Context API + useContext */}
        <Theme />

        {/* Redux */}
        <ReduxCounter />

        {/* useReducer */}
        <h2>useReducer Form</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "update",
              payload: e.target.value,
            })
          }
        />
        <h3>Name : {state.name}</h3>
      </div>
    </ThemeContext.Provider>
  );
}

export default StateApp;