import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  department: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function EmployeeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);

    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Department"
        value={state.department}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "department",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;