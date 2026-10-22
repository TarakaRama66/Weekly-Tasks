import React, { useState } from "react";

// Initial data
const initialEmployees = [
  { id: 1, name: "Ravi", role: "Frontend Developer" },
  { id: 2, name: "Priya", role: "Backend Developer" },
  { id: 3, name: "Arjun", role: "UI Designer" },
];

// Custom Hook
function useEmployees() {
  const [employees, setEmployees] = useState(initialEmployees);

  function addEmployee(name, role) {
    if (!name.trim() || !role.trim()) return;

    const newEmployee = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
    };

    setEmployees((previous) => [...previous, newEmployee]);
  }

  function updateEmployee(id, name, role) {
    if (!name.trim() || !role.trim()) return;

    setEmployees((previous) =>
      previous.map((employee) =>
        employee.id === id
          ? { ...employee, name: name.trim(), role: role.trim() }
          : employee
      )
    );
  }

  function deleteEmployee(id) {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  }

  function resetEmployees() {
    setEmployees(initialEmployees.map((employee) => ({ ...employee })));
  }

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    resetEmployees,
  };
}

// Employee form
function EmployeeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Please enter both name and role.");
      return;
    }

    onAdd(name, role);
    setName("");
    setRole("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Employee name"
      />

      <input
        value={role}
        onChange={(event) => setRole(event.target.value)}
        placeholder="Employee role"
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

// Employee list
function EmployeeList({ employees, onDelete, onUpdate }) {
  return (
    <section>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee) => (
          <EmployeeItem
            key={employee.id}
            employee={employee}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </section>
  );
}

// Reusable employee item
function EmployeeItem({ employee, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(employee.name);
  const [role, setRole] = useState(employee.role);

  function handleUpdate(event) {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Name and role are required.");
      return;
    }

    onUpdate(employee.id, name, role);
    setEditing(false);
  }

  return (
    <div>
      {editing ? (
        <form onSubmit={handleUpdate}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Employee name"
          />

          <input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Employee role"
          />

          <button type="submit">Save</button>

          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h3>{employee.name}</h3>
          <p>Role: {employee.role}</p>

          <button
            onClick={() => {
              setName(employee.name);
              setRole(employee.role);
              setEditing(true);
            }}
          >
            Edit
          </button>

          <button onClick={() => onDelete(employee.id)}>
            Delete
          </button>
        </>
      )}

      <hr />
    </div>
  );
}

// Main App
export default function Task7() {
  const {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    resetEmployees,
  } = useEmployees();

  return (
    <main>
      <h1>Employee Management System</h1>
      <h2>Total Employees: {employees.length}</h2>

      <EmployeeForm onAdd={addEmployee} />

      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
        onUpdate={updateEmployee}
      />

      <button onClick={resetEmployees}>Reset Employees</button>
    </main>
  );
}
