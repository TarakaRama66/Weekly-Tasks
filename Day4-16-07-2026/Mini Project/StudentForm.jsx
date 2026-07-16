import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";

const initialState = {name: "",course: "",age: "",};

function reducer(state, action) {
  switch (action.type) {
    case "Update_Field":
      return {...state,[action.field]: action.value,};
    case "Reset":
      return initialState;
    default:
      return state;
  }
}
function StudentForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();
  const handleSubmit = (e) => {e.preventDefault();
    const student = {
      id: Date.now(),
      name: state.name,
      course: state.course,
      age: state.age,
    };
    reduxDispatch(addStudent(student));
    dispatch({ type: "Reset" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "Update_Field",
            field: "name",
            value: e.target.value,
          })
        }/>
      <br></br>
      <input
        type="text"
        placeholder="Enter Course"
        value={state.course}
        onChange={(e) =>
          dispatch({
            type: "Update_Field",
            field: "course",
            value: e.target.value,
          })
        }/>
        <br></br>
      <input
        type="number"
        placeholder="Enter Age"
        value={state.age}
        onChange={(e) =>
          dispatch({
            type: "Update_Field",
            field: "age",
            value: e.target.value,
          })
        }/>
        <br></br>
      <button type="submit">Add Student</button>
    </form>
  );
}
export default StudentForm;