import { useState } from "react";

//Custom Hook
function useEmployees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ravi", role: "Frontend Developer" },
    { id: 2, name: "Priya", role: "React Developer" },
    { id: 3, name: "Kiran", role: "UI Developer" },
  ]);

  // Add employee
  const addEmployee = (name, role) => {
    if (!name.trim() || !role.trim()) {
      return false;
    }

    const newEmployee = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
    };

    setEmployees((previous) => [...previous, newEmployee]);
    return true;
  };

  // Delete employee
  const deleteEmployee = (id) => {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  };

  // Update employee
  const updateEmployee = (id, updatedName, updatedRole) => {
    if (!updatedName.trim() || !updatedRole.trim()) {
      return false;
    }

    setEmployees((previous) =>
      previous.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              name: updatedName.trim(),
              role: updatedRole.trim(),
            }
          : employee
      )
    );

    return true;
  };

  return {
    employees,
    addEmployee,
    deleteEmployee,
    updateEmployee,
  };
}

// Main Application
function Task5App() {
  const {
    employees,
    addEmployee,
    deleteEmployee,
    updateEmployee,
  } = useEmployees();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  // Add or update employee
  const handleSubmit = (event) => {
    event.preventDefault();

    let success;

    if (editingId !== null) {
      success = updateEmployee(editingId, name, role);
    } else {
      success = addEmployee(name, role);
    }

    if (!success) {
      setError("Please enter both employee name and role.");
      return;
    }

    setName("");
    setRole("");
    setEditingId(null);
    setError("");
  };

  // Start editing
  const handleEdit = (employee) => {
    setEditingId(employee.id);
    setName(employee.name);
    setRole(employee.role);
    setError("");
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
    setName("");
    setRole("");
    setError("");
  };

  // Search employees
  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Management</h1>

      <h2>
        {editingId !== null ? "Update Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>
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
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>

      {error && <p role="alert">{error}</p>}

      <hr />

      <h2>Employee List</h2>

      <input
        type="text"
        placeholder="Search by name or role"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <p>Total Employees: {employees.length}</p>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              <strong>{employee.name}</strong> — {employee.role}{" "}

              <button
                type="button"
                onClick={() => handleEdit(employee)}
              >
                Edit
              </button>{" "}

              <button
                type="button"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task5App;