import { useState } from "react";
import { Link } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";
import { useEmployeeContext } from "../context/EmployeeContext";

const emptyForm = {
  name: "",
  email: "",
  department: "Frontend",
  status: "Active",
};

export default function EmployeesPage() {
  const {
    filteredEmployees,
    loading,
    error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();

  const { state, dispatch } = useEmployeeContext();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setMessage("Name and email are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setMessage("Enter a valid email address");
      return;
    }

    if (editingId) {
      updateEmployee({
        ...form,
        id: editingId,
        name: form.name.trim(),
        email: form.email.trim(),
      });
      setMessage("Employee updated successfully");
    } else {
      addEmployee({
        ...form,
        name: form.name.trim(),
        email: form.email.trim(),
      });
      setMessage("Employee added successfully");
    }

    setForm(emptyForm);
    setEditingId(null);
  }

  function startEdit(employee) {
    setForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      status: employee.status,
    });
    setEditingId(employee.id);
    setMessage("");
  }

  if (loading) return <p role="status">Loading employees...</p>;

  if (error) {
    return (
      <main>
        <p role="alert">{error}</p>
        <button
          onClick={() =>
            dispatch({ type: "LOAD_SUCCESS", payload: state.employees })
          }
        >
          Dismiss Error
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Employee Management</h1>

      <form onSubmit={handleSubmit}>
        <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>

        <label htmlFor="employee-name">Name</label>
        <input
          id="employee-name"
          value={form.name}
          onChange={(event) =>
            setForm({ ...form, name: event.target.value })
          }
          required
        />

        <label htmlFor="employee-email">Email</label>
        <input
          id="employee-email"
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm({ ...form, email: event.target.value })
          }
          required
        />

        <label htmlFor="employee-department">Department</label>
        <select
          id="employee-department"
          value={form.department}
          onChange={(event) =>
            setForm({ ...form, department: event.target.value })
          }
        >
          <option>Frontend</option>
          <option>Backend</option>
          <option>Testing</option>
          <option>HR</option>
        </select>

        <label htmlFor="employee-status">Status</label>
        <select
          id="employee-status"
          value={form.status}
          onChange={(event) =>
            setForm({ ...form, status: event.target.value })
          }
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          {editingId ? "Update Employee" : "Add Employee"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm(emptyForm);
              setEditingId(null);
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      {message && <p role="status">{message}</p>}

      <h2>Employee List</h2>

      <label htmlFor="employee-search">Search</label>
      <input
        id="employee-search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search name, email, department"
      />

      <label htmlFor="status-filter">Filter by status</label>
      <select
        id="status-filter"
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
      >
        <option>All</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              <Link to={`/employees/${employee.id}`}>
                {employee.name}
              </Link>
              {" — "}
              {employee.email}
              {" — "}
              {employee.department}
              {" — "}
              {employee.status}
              {" "}
              <button
                type="button"
                onClick={() => startEdit(employee)}
              >
                Edit
              </button>
              {" "}
              <button
                type="button"
                onClick={() => {
                  deleteEmployee(employee.id);
                  setMessage("Employee deleted");
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}