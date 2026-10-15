import { useState } from "react";

function BeforeRefractor() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Tarak", role: "Developer" },
    { id: 2, name: "ram", role: "Designer" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  function addEmployee(e) {
    e.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name,
      role,
    };

    setEmployees([...employees, newEmployee]);
    setName("");
    setRole("");
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter((emp) => emp.id !== id));
  }

  return (
    <div>
      <h1>Employee Management</h1>

      <form onSubmit={addEmployee}>
        <input
          type="text"
          placeholder="Employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Employee role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Add Employee</button>
      </form>

      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BeforeRefractor;