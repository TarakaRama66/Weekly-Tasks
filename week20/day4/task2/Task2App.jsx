import { useState } from "react";

function Task2App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Rohit", role: "Frontend Developer" },
    { id: 2, name: "Pooja", role: "UI Developer" },
    { id: 3, name: "Hari", role: "React Developer" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");

  // Add employee
  const addEmployee = (event) => {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Please enter employee name and role");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
    };

    setEmployees((previousEmployees) => [
      ...previousEmployees,
      newEmployee,
    ]);

    setName("");
    setRole("");
  };

  // Delete employee
  const deleteEmployee = (id) => {
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id)
    );
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

      <h2>Add Employee</h2>

      <form onSubmit={addEmployee}>
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

      <hr />

      <h2>Employee List</h2>

      <input
        type="text"
        placeholder="Search by name or role"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <p>Total employees: {employees.length}</p>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              <strong>{employee.name}</strong> — {employee.role}{" "}
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

export default Task2App;