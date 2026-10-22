import React, { useReducer, useState } from "react";

// 1. Initial state
const initialState = {
  employees: [
    { id: 1, name: "Ravi", role: "Frontend Developer", status: "Active" },
    { id: 2, name: "Priya", role: "Backend Developer", status: "Active" },
    { id: 3, name: "Arjun", role: "UI Designer", status: "Inactive" },
  ],
};

// 2. Reducer function
function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, ...action.payload }
            : employee
        ),
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// 3. Main App
export default function Task5() {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);

  // Add or update employee
  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Please enter employee name and role.");
      return;
    }

    if (editingId !== null) {
      dispatch({
        type: "UPDATE_EMPLOYEE",
        payload: { id: editingId, name: name.trim(), role: role.trim() },
      });
      setEditingId(null);
    } else {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: {
          id: Date.now(),
          name: name.trim(),
          role: role.trim(),
          status: "Active",
        },
      });
    }

    setName("");
    setRole("");
  }

  // Load employee details into form
  function handleEdit(employee) {
    setEditingId(employee.id);
    setName(employee.name);
    setRole(employee.role);
  }

  // Search and filter
  const filteredEmployees = state.employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.role.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || employee.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h1>Employee Management System</h1>

      <h2>
        Total Employees: {state.employees.length}
      </h2>

      <form onSubmit={handleSubmit}>
        <h3>{editingId !== null ? "Edit Employee" : "Add Employee"}</h3>

        <input
          type="text"
          placeholder="Employee name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Employee role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />

        <button type="submit">
          {editingId !== null ? "Update Employee" : "Add Employee"}
        </button>

        {editingId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setName("");
              setRole("");
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <hr />

      <h2>Search and Filter</h2>

      <input
        type="text"
        placeholder="Search by name or role"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="All">All Employees</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <h2>Employee List</h2>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        filteredEmployees.map((employee) => (
          <div key={employee.id}>
            <h3>{employee.name}</h3>
            <p>Role: {employee.role}</p>
            <p>Status: {employee.status}</p>

            <button onClick={() => handleEdit(employee)}>
              Edit
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_EMPLOYEE",
                  payload: employee.id,
                })
              }
            >
              Delete
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_EMPLOYEE",
                  payload: {
                    id: employee.id,
                    status:
                      employee.status === "Active"
                        ? "Inactive"
                        : "Active",
                  },
                })
              }
            >
              Toggle Status
            </button>

            <hr />
          </div>
        ))
      )}

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "RESET" });
          setName("");
          setRole("");
          setSearch("");
          setFilter("All");
          setEditingId(null);
        }}
      >
        Reset All
      </button>
    </div>
  );
}
