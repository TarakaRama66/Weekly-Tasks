import { useState } from "react";

// Initial employee data
const initialEmployees = [
  { id: 1, name: "Kamal", role: "Frontend Developer" },
  { id: 2, name: "Pooja", role: "React Developer" },
  { id: 3, name: "Komali", role: "Frontend Developer" },
];

// Reusable validation function
function validateEmployee(name, role) {
  if (!name.trim()) {
    return "Employee name is required.";
  }

  if (!role.trim()) {
    return "Employee role is required.";
  }

  return "";
}

// Reusable employee search function
function searchEmployees(employees, searchText, selectedRole) {
  return employees.filter((employee) => {
    const matchesSearch = `${employee.name} ${employee.role}`
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesRole =
      selectedRole === "All" || employee.role === selectedRole;

    return matchesSearch && matchesRole;
  });
}

// Reusable form reset function
function getEmptyForm() {
  return {
    name: "",
    role: "",
  };
}

// Main application
function Task9App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [formData, setFormData] = useState(getEmptyForm());
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [errorMessage, setErrorMessage] = useState("");

  // Update form fields
  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormData((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  // Reset form and editing state
  function resetForm() {
    setFormData(getEmptyForm());
    setEditingEmployeeId(null);
    setErrorMessage("");
  }

  // Add or update an employee
  function handleSubmit(event) {
    event.preventDefault();

    const validationError = validateEmployee(
      formData.name,
      formData.role
    );

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    const employeeDetails = {
      name: formData.name.trim(),
      role: formData.role.trim(),
    };

    if (editingEmployeeId !== null) {
      setEmployees((previousEmployees) =>
        previousEmployees.map((employee) =>
          employee.id === editingEmployeeId
            ? { ...employee, ...employeeDetails }
            : employee
        )
      );
    } else {
      setEmployees((previousEmployees) => [
        ...previousEmployees,
        {
          id: Date.now(),
          ...employeeDetails,
        },
      ]);
    }

    resetForm();
  }

  // Load an employee into the form for editing
  function handleEdit(employee) {
    setFormData({
      name: employee.name,
      role: employee.role,
    });

    setEditingEmployeeId(employee.id);
    setErrorMessage("");
  }

  // Delete an employee
  function handleDelete(employeeId) {
    setEmployees((previousEmployees) =>
      previousEmployees.filter(
        (employee) => employee.id !== employeeId
      )
    );

    if (editingEmployeeId === employeeId) {
      resetForm();
    }
  }

  // Reuse the search function
  const filteredEmployees = searchEmployees(
    employees,
    searchText,
    selectedRole
  );

  // Get unique roles for the filter dropdown
  const availableRoles = [
    "All",
    ...new Set(employees.map((employee) => employee.role)),
  ];

  return (
    <div>
      <h1>Employee Management</h1>

      <h2>
        {editingEmployeeId !== null
          ? "Edit Employee"
          : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Employee name"
          value={formData.name}
          onChange={handleFormChange}
        />

        <input
          name="role"
          placeholder="Employee role"
          value={formData.role}
          onChange={handleFormChange}
        />

        <button type="submit">
          {editingEmployeeId !== null
            ? "Update Employee"
            : "Add Employee"}
        </button>

        {editingEmployeeId !== null && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {errorMessage && <p role="alert">{errorMessage}</p>}

      <hr />

      <h2>Employee List</h2>

      <input
        placeholder="Search employees"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <select
        value={selectedRole}
        onChange={(event) => setSelectedRole(event.target.value)}
      >
        {availableRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <p>Total employees: {employees.length}</p>
      <p>Matching employees: {filteredEmployees.length}</p>

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
                onClick={() => handleDelete(employee.id)}
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

export default Task9App;