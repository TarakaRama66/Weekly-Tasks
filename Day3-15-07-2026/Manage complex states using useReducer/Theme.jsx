import { useReducer } from "react";

const initialState = {
  isDark: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Theme":
      return {
        ...state,
        isDark: !state.isDark,
      };

    default:
      return state;
  }
}

function Theme() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        backgroundColor: state.isDark ? "#222" : "#fff",
        color: state.isDark ? "#fff" : "#000",
        minHeight: "10vh",
        padding: "20px",
      }}
    >
      <h1>Theme Example</h1>
      <p>This is a useReducer theme example.</p>

      <button onClick={() => dispatch({ type: "Theme" })}>
        Change Theme
      </button>
    </div>
  );
}
export default Theme;