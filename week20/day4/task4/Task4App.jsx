import { useEffect, useState } from "react";

//Simulated API service layer
const employeeService = {
  async getEmployees() {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [
      { id: 1, name: "Gupta", role: "Frontend Developer" },
      { id: 2, name: "Poori", role: "React Developer" },
      { id: 3, name: "Johny", role: "UI Developer" },
    ];
  },

  async addEmployee(employee) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
      ...employee,
      id: Date.now(),
    };
  },

  async deleteEmployee(id) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return { success: true, id };
  },
};

//Reusable Button
function Button({ children, onClick, type = "button", disabled = false }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

//Main application
function Task4App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Load employees through the service layer
  useEffect(() => {
    async function loadEmployees() {
      try {
        setError("");
        const data = await employeeService.getEmployees();
        setEmployees(data);
      } catch {
        setError("Unable to load employees.");
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  // Add employee through the service layer
  async function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      setError("Please enter both name and role.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const newEmployee = await employeeService.addEmployee({
        name: name.trim(),
        role: role.trim(),
      });

      setEmployees((previous) => [...previous, newEmployee]);
      setName("");
      setRole("");
    } catch {
      setError("Unable to add employee.");
    } finally {
      setSaving(false);
    }
  }

  // Delete employee through the service layer
  async function handleDelete(id) {
    try {
      setError("");

      await employeeService.deleteEmployee(id);

      setEmployees((previous) =>
        previous.filter((employee) => employee.id !== id)
      );
    } catch {
      setError("Unable to delete employee.");
    }
  }

  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Employee name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          placeholder="Employee role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />

        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Add Employee"}
        </Button>
      </form>

      <br />

      <input
        placeholder="Search employees"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {error && <p role="alert">{error}</p>}

      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <>
          <h2>Employee List</h2>
          <p>Total employees: {employees.length}</p>

          {filteredEmployees.length === 0 ? (
            <p>No employees found.</p>
          ) : (
            <ul>
              {filteredEmployees.map((employee) => (
                <li key={employee.id}>
                  {employee.name} — {employee.role}{" "}
                  <Button onClick={() => handleDelete(employee.id)}>
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Task4App;