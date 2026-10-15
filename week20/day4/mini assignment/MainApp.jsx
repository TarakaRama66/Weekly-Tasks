import React, {
  Component,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
//service layer
const STORAGE_KEY = "employee-portal-employees";
const initialEmployees = [
  {
    id: 1,
    name: "Ravi Kumar",
    email: "ravi@example.com",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    department: "Design",
    status: "Active",
  },
  {
    id: 3,
    name: "Kiran Reddy",
    email: "kiran@example.com",
    department: "HR",
    status: "Inactive",
  },
];
const employeeService = {
  async getAll() {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const storedEmployees = localStorage.getItem(STORAGE_KEY);
    if (storedEmployees === null) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(initialEmployees)
      );
      return initialEmployees;
    }
    const employees = JSON.parse(storedEmployees);
    if (!Array.isArray(employees)) {
      throw new Error("Employee data is invalid.");
    }
    return employees;
  },
  async create(employeeData) {
    const employees = await this.getAll();
    const newEmployee = {
      ...employeeData,
      id: Date.now(),
    };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...employees, newEmployee])
    );
    return newEmployee;
  },
  async update(id, employeeData) {
    const employees = await this.getAll();
    if (!employees.some((employee) => employee.id === id)) {
      throw new Error("Employee not found.");
    }
    const updatedEmployees = employees.map((employee) =>
      employee.id === id
        ? { ...employee, ...employeeData, id }
        : employee
    );
    localStorage.setItem(STORAGE_KEY,JSON.stringify(updatedEmployees));
    return updatedEmployees.find((employee) => employee.id === id);
  },
  async remove(id) {
    const employees = await this.getAll();
    if (!employees.some((employee) => employee.id === id)) {
      throw new Error("Employee not found.");
    }
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    localStorage.setItem(STORAGE_KEY,JSON.stringify(updatedEmployees));
    return id;
  },
};
//custom hook
function useFetch(fetchFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err.message || "Unable to load data.");
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, setData, loading, error, reload: loadData };
}
//centralized stage
const EmployeeContext = createContext(null);
function EmployeeProvider({ children }) {
  const {
    data: employees,
    setData: setEmployees,
    loading,
    error,
    reload,
  } = useFetch(employeeService.getAll);
  const addEmployee = useCallback(
    async (employeeData) => {
      const newEmployee = await employeeService.create(employeeData);
      setEmployees((previous) => [...previous, newEmployee]);
      return newEmployee;
    },
    [setEmployees]
  );
  const updateEmployee = useCallback(
    async (id, employeeData) => {
      const updatedEmployee = await employeeService.update(
        id,
        employeeData
      );
      setEmployees((previous) =>
        previous.map((employee) =>
          employee.id === id ? updatedEmployee : employee
        )
      );
      return updatedEmployee;
    },
    [setEmployees]
  );
  const deleteEmployee = useCallback(
    async (id) => {
      await employeeService.remove(id);
      setEmployees((previous) =>
        previous.filter((employee) => employee.id !== id)
      );
    },
    [setEmployees]
  );
  const value = useMemo(() => ({employees,loading,error,addEmployee,updateEmployee,deleteEmployee,reload,}),
    [employees,loading,error,addEmployee,updateEmployee,deleteEmployee,reload,]);
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
function useEmployees() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error(
      "useEmployees must be used inside EmployeeProvider."
    );
  }

  return context;
}
//reusable ai components
function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="modal-header">
          <h2>{title}</h2>

          <button
            type="button"
            className="close-button"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {children}
      </section>
    </div>
  );
}

function StatusMessage({ type, message, onRetry }) {
  return (
    <div
      className={`status-message status-${type}`}
      role={type === "error" ? "alert" : "status"}
    >
      <p>{message}</p>

      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
//reusable table component
function Table({ columns, data, emptyMessage }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="empty-cell">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.render
                      ? column.render(row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
//employee form
function EmployeeForm({ employee, onSave, onCancel }) {
  const [name, setName] = useState(employee?.name || "");
  const [email, setEmail] = useState(employee?.email || "");
  const [department, setDepartment] = useState(
    employee?.department || "Engineering"
  );
  const [status, setStatus] = useState(employee?.status || "Active");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !department.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      await onSave({
        name: name.trim(),
        email: email.trim(),
        department,
        status,
      });
    } catch (err) {
      setError(err.message || "Unable to save employee.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Employee Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter employee name"
        required
      />

      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="employee@example.com"
        required
      />

      <label className="form-field">
        <span>Department</span>
        <select
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option>Engineering</option>
          <option>Design</option>
          <option>HR</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
      </label>

      <label className="form-field">
        <span>Status</span>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </label>

      {error && <p className="form-error">{error}</p>}

      <div className="form-actions">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button type="submit" disabled={saving}>
          {saving
            ? "Saving..."
            : employee
              ? "Update Employee"
              : "Add Employee"}
        </Button>
      </div>
    </form>
  );
}
//employee table
function EmployeeTable({ employees, onEdit, onDelete }) {
  const columns = [
    {
      key: "name",
      label: "Employee",
      render: (employee) => (
        <div>
          <strong>{employee.name}</strong>
          <div className="muted">{employee.email}</div>
        </div>
      ),
    },
    { key: "department", label: "Department" },
    {
      key: "status",
      label: "Status",
      render: (employee) => (
        <span
          className={`status-badge ${
            employee.status === "Active" ? "active" : "inactive"
          }`}
        >
          {employee.status}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (employee) => (
        <div className="table-actions">
          <Button
            variant="secondary"
            onClick={() => onEdit(employee)}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => onDelete(employee.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={employees}
      emptyMessage="No employees found."
    />
  );
}
//error boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="page">
          <div className="status-message status-error">
            <h2>Something went wrong</h2>
            <p>The page could not be displayed.</p>

            <Button onClick={() => window.location.reload()}>
              Reload Application
            </Button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
//employee dashboard
function EmployeeDashboard() {
  const {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    reload,
  } = useEmployees();

  const [searchText, setSearchText] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionError, setActionError] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      `${employee.name} ${employee.email} ${employee.department}`
        .toLowerCase()
        .includes(search);

    const matchesDepartment =
      selectedDepartment === "All" ||
      employee.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  const activeCount = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  async function handleSave(employeeData) {
    if (selectedEmployee) {
      await updateEmployee(selectedEmployee.id, employeeData);
    } else {
      await addEmployee(employeeData);
    }

    setSelectedEmployee(null);
    setModalOpen(false);
    setActionError("");
  }

  async function handleDelete(employeeId) {
    if (!window.confirm("Delete this employee?")) return;

    try {
      setActionError("");
      await deleteEmployee(employeeId);
    } catch (err) {
      setActionError(err.message || "Unable to delete employee.");
    }
  }

  function openAddModal() {
    setSelectedEmployee(null);
    setModalOpen(true);
  }

  function openEditModal(employee) {
    setSelectedEmployee(employee);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedEmployee(null);
  }

  if (loading) {
    return (
      <main className="page">
        <StatusMessage
          type="loading"
          message="Loading employee records..."
        />
      </main>
    );
  }

  if (error) {
    return (
      <main className="page">
        <StatusMessage
          type="error"
          message={error}
          onRetry={reload}
        />
      </main>
    );
  }

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">WORKSPACE / PEOPLE</p>
          <h1>Employee Management</h1>
          <p className="muted">
            Manage employee records in one place.
          </p>
        </div>

        <Button onClick={openAddModal}>+ Add Employee</Button>
      </header>

      <section className="stats">
        <article className="stat-card">
          <span>Total Employees</span>
          <strong>{employees.length}</strong>
        </article>

        <article className="stat-card">
          <span>Active Employees</span>
          <strong>{activeCount}</strong>
        </article>

        <article className="stat-card">
          <span>Inactive Employees</span>
          <strong>{employees.length - activeCount}</strong>
        </article>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Employee Directory</h2>
            <p className="muted">
              {filteredEmployees.length} matching employees
            </p>
          </div>
        </div>

        <div className="filters">
          <Input
            label="Search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search name, email, department..."
          />

          <label className="form-field">
            <span>Department</span>

            <select
              value={selectedDepartment}
              onChange={(event) =>
                setSelectedDepartment(event.target.value)
              }
            >
              <option value="All">All departments</option>

              {[...new Set(employees.map((item) => item.department))]
                .sort()
                .map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
            </select>
          </label>
        </div>

        {actionError && (
          <StatusMessage type="error" message={actionError} />
        )}

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={openEditModal}
          onDelete={handleDelete}
        />
      </section>

      {modalOpen && (
        <Modal
          title={
            selectedEmployee ? "Edit Employee" : "Add New Employee"
          }
          onClose={closeModal}
        >
          <EmployeeForm
            key={selectedEmployee?.id ?? "new"}
            employee={selectedEmployee}
            onSave={handleSave}
            onCancel={closeModal}
          />
        </Modal>
      )}

      <footer className="page-footer">
        Employee Management Portal · React Modular Architecture
      </footer>
    </main>
  );
}
//App
export default function MiniApp() {
  return (
    <ErrorBoundary>
      <EmployeeProvider>
        <EmployeeDashboard />
      </EmployeeProvider>
    </ErrorBoundary>
  );
}