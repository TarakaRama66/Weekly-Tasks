
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

// Sample data: no backend required
export async function fetchEmployees() {
  return [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@example.com",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
    },
  ];
}

// Reusable Employee Card
export function EmployeeCard({ employee, onDelete }) {
  return (
    <li>
      <strong>{employee.name}</strong> — {employee.email}{" "}
      <button
        type="button"
        aria-label={`Delete ${employee.name}`}
        onClick={() => onDelete(employee.id)}
      >
        Delete
      </button>
    </li>
  );
}

// Reusable Employee List
export function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <ul aria-label="Employee list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

// Add Employee Form
export function EmployeeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Employee name is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address");
      return;
    }

    onAdd({
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
    });

    setName("");
    setEmail("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <label htmlFor="employee-name">Employee Name</label>
      <input
        id="employee-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <br />

      <label htmlFor="employee-email">Email Address</label>
      <input
        id="employee-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />

      {error && <p role="alert">{error}</p>}

      <button type="submit">Add Employee</button>
    </form>
  );
}

// Login Form
export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    onLogin(email.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Employee Portal Login</h1>

      <label htmlFor="login-email">Email Address</label>
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />

      {error && <p role="alert">{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

// Employee Dashboard
export function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    let active = true;

    fetchEmployees()
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Invalid employee data");
        }

        if (active) {
          setEmployees(data);
          setStatus("success");
        }
      })
      .catch(() => {
        if (active) {
          setError("Unable to load employees. Please try again.");
          setStatus("error");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  function addEmployee(employee) {
    setEmployees((current) => [...current, employee]);
  }

  function deleteEmployee(id) {
    setEmployees((current) =>
      current.filter((employee) => employee.id !== id)
    );
  }

  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>Employee Management Dashboard</h1>

      <p>
        Application:{" "}
        {import.meta.env.VITE_APP_NAME || "Employee Portal"}
      </p>

      <label htmlFor="employee-search">Search employees</label>
      <input
        id="employee-search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by name or email"
      />

      <br />

      <button onClick={() => setShowForm((value) => !value)}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>

      {status === "loading" && (
        <p role="status">Loading employees...</p>
      )}

      {status === "error" && <p role="alert">{error}</p>}

      {status === "success" && (
        <>
          {showForm && <EmployeeForm onAdd={addEmployee} />}

          <h2>Employees ({filteredEmployees.length})</h2>

          <EmployeeList
            employees={filteredEmployees}
            onDelete={deleteEmployee}
          />
        </>
      )}
    </main>
  );
}

// Login Page
function LoginPage() {
  const navigate = useNavigate();

  return (
    <LoginForm
      onLogin={() => navigate("/dashboard")}
    />
  );
}

// Application Routes
export function AppRoutes() {
  return (
    <>
      <nav aria-label="Main navigation">
        <Link to="/">Login</Link>
        {" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={<h1>Page Not Found</h1>}
        />
      </Routes>
    </>
  );
}

// Main Application
export default function TasksApp() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
