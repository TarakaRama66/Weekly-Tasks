import React, { useReducer, useState } from "react";

// Initial employee data
const initialEmployees = [
  { id: 1, name: "Ravi", role: "Frontend Developer" },
  { id: 2, name: "Priya", role: "Backend Developer" },
  { id: 3, name: "Arjun", role: "UI Designer" },
];

// Reducer function
function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((employee) =>
        employee.id === action.payload.id
          ? { ...employee, ...action.payload }
          : employee
      );

    case "DELETE":
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    case "RESET":
      return initialEmployees.map((employee) => ({ ...employee }));

    default:
      return state;
  }
}

export default function Task6() {
  const [employees, dispatch] = useReducer(
    employeeReducer,
    initialEmployees
  );

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Add or update employee
  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Please enter both employee name and role.");
      return;
    }

    if (editingId !== null) {
      dispatch({
        type: "UPDATE",
        payload: {
          id: editingId,
          name: name.trim(),
          role: role.trim(),
        },
      });

      setEditingId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: {
          id: Date.now(),
          name: name.trim(),
          role: role.trim(),
        },
      });
    }

    setName("");
    setRole("");
  }

  // Load employee into form for editing
  function handleEdit(employee) {
    setEditingId(employee.id);
    setName(employee.name);
    setRole(employee.role);
  }

  // Reset form
  function cancelEdit() {
    setEditingId(null);
    setName("");
    setRole("");
  }

  return (
    <div>
      <h1>Employee Management System</h1>

      <h2>Total Employees: {employees.length}</h2>

      <form onSubmit={handleSubmit}>
        <h3>{editingId !== null ? "Update Employee" : "Add Employee"}</h3>

        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Enter employee role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />

        <button type="submit">
          {editingId !== null ? "Save Changes" : "Add Employee"}
        </button>

        {editingId !== null && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <hr />

      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        employees.map((employee) => (
          <div key={employee.id}>
            <h3>{employee.name}</h3>
            <p>Role: {employee.role}</p>

            <button onClick={() => handleEdit(employee)}>
              Edit
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  payload: employee.id,
                })
              }
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      )}

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "RESET" });
          cancelEdit();
        }}
      >
        Reset Employees
      </button>
    </div>
  );
}
