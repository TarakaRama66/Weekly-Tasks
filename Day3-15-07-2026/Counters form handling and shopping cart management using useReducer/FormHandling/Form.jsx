import { useReducer } from "react";

const initialState = {name: "",email: "",};

function reducer(state, action) {
  switch (action.type) {
    case "Set_Name":
      return {...state,name: action.payload,};
    case "Set_Email":
      return {...state,email: action.payload,};
    case "Reset":
      return initialState;
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Registration Form</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>dispatch({type: "Set_Name",payload: e.target.value,})}/>
      <br /><br />
      <input
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>dispatch({type: "Set_Email",payload: e.target.value,})}/>
      <br /><br />
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <h3>Preview</h3>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <br></br>
      <button onClick={()=>dispatch({type:"Submit"})}>Submit</button>
    </div>
  );
}
export default Form;