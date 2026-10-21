import { useState } from "react";

function Task11App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Rahul", role: "Frontend Developer" },
    { id: 2, name: "Priya", role: "Backend Developer" },
    { id: 3, name: "Kiran", role: "Software Tester" }
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("Frontend Developer");

  function addEmployee(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    const newEmployee = {
      id: crypto.randomUUID(),
      name: name.trim(),
      role
    };

    setEmployees(previousEmployees => [
      ...previousEmployees,
      newEmployee
    ]);

    setName("");
    setRole("Frontend Developer");
  }

  function deleteEmployee(id) {
    setEmployees(previousEmployees =>
      previousEmployees.filter(employee => employee.id !== id)
    );
  }

  return (
    <div>
      <h1>NYB Infotech</h1>
      <h2>Employee Management</h2>

      <form onSubmit={addEmployee}>
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Enter employee name"
          required
        />

        <select
          value={role}
          onChange={event => setRole(event.target.value)}
        >
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Software Tester</option>
        </select>

        <button type="submit">Add Employee</button>
      </form>

      <h2>Employee List ({employees.length})</h2>

      {employees.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              <strong>{employee.name}</strong>
              {" - "}
              {employee.role}
              {" "}
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

export default Task11App;