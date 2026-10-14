import { useReducer, useState } from "react";

// Initial student records
const initialState = {
  students: [
    {
      id: 1,
      name: "Rahul",
      course: "React",
      marks: 85,
    },
    {
      id: 2,
      name: "Priya",
      course: "JavaScript",
      marks: 92,
    },
  ],
};

// Reducer function
function studentReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        students: [
          ...state.students,
          action.payload,
        ],
      };

    case "UPDATE":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, ...action.payload }
            : student
        ),
      };

    case "DELETE":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Task2App() {
  const [state, dispatch] = useReducer(
    studentReducer,
    initialState
  );

  const [name, setName] = useState("");
  const [course, setCourse] = useState("React");
  const [marks, setMarks] = useState("");

  // Add student
  function handleAdd(event) {
    event.preventDefault();

    const numericMarks = Number(marks);

    if (
      !name.trim() ||
      !course.trim() ||
      marks.trim() === "" ||
      !Number.isFinite(numericMarks) ||
      numericMarks < 0 ||
      numericMarks > 100
    ) {
      alert("Enter valid student details and marks (0–100).");
      return;
    }

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name: name.trim(),
        course,
        marks: numericMarks,
      },
    });

    setName("");
    setCourse("React");
    setMarks("");
  }

  // Update student
  function handleUpdate(student) {
    const newName = prompt(
      "Enter student name:",
      student.name
    );

    if (newName === null || !newName.trim()) {
      return;
    }

    const newMarks = prompt(
      "Enter marks (0–100):",
      String(student.marks)
    );

    if (newMarks === null || newMarks.trim() === "") {
      return;
    }

    const numericMarks = Number(newMarks);

    if (
      !Number.isFinite(numericMarks) ||
      numericMarks < 0 ||
      numericMarks > 100
    ) {
      alert("Marks must be between 0 and 100.");
      return;
    }

    dispatch({
      type: "UPDATE",
      payload: {
        id: student.id,
        name: newName.trim(),
        marks: numericMarks,
      },
    });
  }

  // Delete student
  function handleDelete(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  // Reset student records
  function handleReset() {
    dispatch({ type: "RESET" });

    setName("");
    setCourse("React");
    setMarks("");
  }

  return (
    <main>
      <h1>Student Record Management</h1>

      <h2>Total Students: {state.students.length}</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        >
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="Node.js">Node.js</option>
        </select>

        <input
          type="number"
          placeholder="Marks (0–100)"
          min="0"
          max="100"
          value={marks}
          onChange={(event) => setMarks(event.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      <h2>Student List</h2>

      {state.students.length === 0 ? (
        <p>No student records found.</p>
      ) : (
        state.students.map((student) => (
          <article key={student.id}>
            <h3>{student.name}</h3>
            <p>Course: {student.course}</p>
            <p>Marks: {student.marks}/100</p>

            <button
              type="button"
              onClick={() => handleUpdate(student)}
            >
              Update
            </button>

            <button
              type="button"
              onClick={() => handleDelete(student.id)}
            >
              Delete
            </button>

            <hr />
          </article>
        ))
      )}

      <button type="button" onClick={handleReset}>
        Reset All Records
      </button>
    </main>
  );
}

export default Task2App;