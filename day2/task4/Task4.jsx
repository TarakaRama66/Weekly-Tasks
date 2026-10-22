import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const EmployeeContext = createContext();

// 2. Provider component
function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ravi", role: "Frontend Developer" },
    { id: 2, name: "Priya", role: "Backend Developer" },
    { id: 3, name: "Arjun", role: "UI Designer" },
  ]);

  const addEmployee = (name, role) => {
    if (!name.trim() || !role.trim()) return;

    const newEmployee = {
      id: Date.now(),
      name,
      role,
    };

    setEmployees((previous) => [...previous, newEmployee]);
  };

  const deleteEmployee = (id) => {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

// 3. Component that reads global data
function EmployeeList() {
  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onDelete={deleteEmployee}
          />
        ))
      )}
    </div>
  );
}

// 4. Reusable employee component
function EmployeeCard({ employee, onDelete }) {
  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <button onClick={() => onDelete(employee.id)}>
        Delete
      </button>
      <hr />
    </div>
  );
}

// 5. Component that updates global data
function AddEmployee() {
  const { addEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Please enter both name and role.");
      return;
    }

    addEmployee(name, role);
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

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

      <button type="submit">Add Employee</button>
    </form>
  );
}

// 6. Dashboard does not need to pass employee data
function Dashboard() {
  return (
    <div>
      <h1>Employee Management Dashboard</h1>
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}

// 7. Main App
export default function Task4() {
  return (
    <EmployeeProvider>
      <Dashboard />
    </EmployeeProvider>
  );
}
