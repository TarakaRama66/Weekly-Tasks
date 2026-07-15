import { useReducer } from "react";

const initialState = {name: "",email: "",isLoggedIn: false,theme: "Light",};
function reducer(state, action) {
  switch (action.type) {
    case "Set_Name":
      return {...state,name: action.payload,};
    case "Set_Email":
      return {...state,email: action.payload,};
    case "Login":
      return {...state,isLoggedIn: true,};
    case "Logout":
      return {...state,isLoggedIn: false,name: "",email: "",};
    case "Theme":
      return {...state,theme: state.theme === "Light" ? "Dark" : "Light",};
    default:
      return state;
  }
}
function UserProfile() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Logged In: {state.isLoggedIn ? "Yes" : "No"}</p>
      <p>Theme: {state.theme}</p>

      <button onClick={() =>dispatch({type: "Set_Name",payload: "Gupta",})}>Set Name</button>
      <button onClick={() =>dispatch({type: "Set_Email",payload: "gupta@gmail.com",})}>Set Email</button>
      <button onClick={() => dispatch({ type: "Login" })}>Login</button>
      <button onClick={() => dispatch({ type: "Logout" })}>Logout</button>
      <button onClick={() => dispatch({ type: "Theme" })}>Theme</button>
    </div>
  );
}
export default UserProfile;