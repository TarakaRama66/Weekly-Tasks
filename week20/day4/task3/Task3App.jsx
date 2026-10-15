import { useState } from "react";

// 1. Reusable Input Component
function Input({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <br />
      <br />
    </div>
  );
}

// 2. Reusable Button Component
function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

// 3. Reusable Modal Component
function Modal({ title, children, onClose }) {
  return (
    <div>
      <hr />
      <h2>{title}</h2>
      {children}
      <Button onClick={onClose}>Close</Button>
      <hr />
    </div>
  );
}

// 4. Reusable Table Component
function Table({ columns, data }) {
  return (
    <table border="1" cellPadding="8">
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
            <td colSpan={columns.length}>No employees found.</td>
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
  );
}

// 5. Main Application
function Task3App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Tarak", role: "Frontend Developer" },
    { id: 2, name: "Tilak", role: "React Developer" },
    { id: 3, name: "RamGupta", role: "UI Developer" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Add or update employee
  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !role.trim()) {
      alert("Please enter employee name and role.");
      return;
    }

    if (editingId !== null) {
      setEmployees((previous) =>
        previous.map((employee) =>
          employee.id === editingId
            ? { ...employee, name: name.trim(), role: role.trim() }
            : employee
        )
      );
    } else {
      setEmployees((previous) => [
        ...previous,
        {
          id: Date.now(),
          name: name.trim(),
          role: role.trim(),
        },
      ]);
    }

    resetForm();
  }

  // Reset form
  function resetForm() {
    setName("");
    setRole("");
    setEditingId(null);
    setShowModal(false);
  }

  // Open edit modal
  function editEmployee(employee) {
    setName(employee.name);
    setRole(employee.role);
    setEditingId(employee.id);
    setShowModal(true);
  }

  // Delete employee
  function deleteEmployee(id) {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  }

  // Search employees
  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Table columns
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    {
      key: "actions",
      label: "Actions",
      render: (employee) => (
        <>
          <Button onClick={() => editEmployee(employee)}>Edit</Button>{" "}
          <Button onClick={() => deleteEmployee(employee.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>Employee Management</h1>

      <Button
        onClick={() => {
          resetForm();
          setShowModal(true);
        }}
      >
        Add Employee
      </Button>

      <br />
      <br />

      <Input
        label="Search Employees"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by name or role"
      />

      <p>Total Employees: {employees.length}</p>

      <Table columns={columns} data={filteredEmployees} />

      {showModal && (
        <Modal
          title={editingId !== null ? "Edit Employee" : "Add Employee"}
          onClose={resetForm}
        >
          <form onSubmit={handleSubmit}>
            <Input
              label="Employee Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter employee name"
            />

            <Input
              label="Employee Role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="Enter employee role"
            />

            <Button type="submit">
              {editingId !== null ? "Update Employee" : "Save Employee"}
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default Task3App;