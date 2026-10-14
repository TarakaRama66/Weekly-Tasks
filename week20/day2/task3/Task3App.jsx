import { useReducer, useState } from "react";

// Initial state
const initialState = {
  employees: [
    {
      id: 1,
      name: "Rahul",
      department: "Development",
      salary: 45000,
    },
    {
      id: 2,
      name: "Priya",
      department: "Testing",
      salary: 40000,
    },
    {
      id: 3,
      name: "Arjun",
      department: "Development",
      salary: 55000,
    },
  ],
};

// Reducer function
function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees,
          action.payload,
        ],
      };

    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, ...action.payload }
            : employee
        ),
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case "RESET_EMPLOYEES":
      return initialState;

    default:
      return state;
  }
}

function Task3App() {
  const [state, dispatch] = useReducer(
    employeeReducer,
    initialState
  );

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("Development");
  const [salary, setSalary] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");
  const [filterDepartment, setFilterDepartment] =
    useState("All");

  // Add or update employee
  function handleSubmit(event) {
    event.preventDefault();

    const numericSalary = Number(salary);

    if (
      !name.trim() ||
      salary.trim() === "" ||
      !Number.isFinite(numericSalary) ||
      numericSalary < 0
    ) {
      alert("Enter a valid name and salary.");
      return;
    }

    if (editingId !== null) {
      dispatch({
        type: "UPDATE_EMPLOYEE",
        payload: {
          id: editingId,
          name: name.trim(),
          department,
          salary: numericSalary,
        },
      });
    } else {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: {
          id: Date.now(),
          name: name.trim(),
          department,
          salary: numericSalary,
        },
      });
    }

    clearForm();
  }

  // Clear form
  function clearForm() {
    setName("");
    setDepartment("Development");
    setSalary("");
    setEditingId(null);
  }

  // Load employee details into the form
  function handleEdit(employee) {
    setEditingId(employee.id);
    setName(employee.name);
    setDepartment(employee.department);
    setSalary(String(employee.salary));
  }

  // Delete employee
  function handleDelete(id) {
    if (!window.confirm("Delete this employee?")) {
      return;
    }

    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id,
    });

    if (editingId === id) {
      clearForm();
    }
  }

  // Search and department filtering
  const filteredEmployees = state.employees.filter(
    (employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesDepartment =
        filterDepartment === "All" ||
        employee.department === filterDepartment;

      return matchesSearch && matchesDepartment;
    }
  );

  // Calculate total salary
  const totalSalary = state.employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  // Reset records
  function handleReset() {
    if (window.confirm("Reset all employee records?")) {
      dispatch({ type: "RESET_EMPLOYEES" });
      clearForm();
      setSearch("");
      setFilterDepartment("All");
    }
  }

  return (
    <main>
      <h1>Employee Management System</h1>

      <section>
        <h2>Dashboard</h2>

        <p>Total Employees: {state.employees.length}</p>

        <p>
          Total Monthly Salary: ₹
          {totalSalary.toLocaleString("en-IN")}
        </p>
      </section>

      <hr />

      <section>
        <h2>
          {editingId !== null
            ? "Update Employee"
            : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Employee name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <select
            value={department}
            onChange={(event) =>
              setDepartment(event.target.value)
            }
          >
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="HR">HR</option>
            <option value="Design">Design</option>
          </select>

          <input
            type="number"
            min="0"
            placeholder="Monthly salary"
            value={salary}
            onChange={(event) =>
              setSalary(event.target.value)
            }
            required
          />

          <button type="submit">
            {editingId !== null
              ? "Save Changes"
              : "Add Employee"}
          </button>

          {editingId !== null && (
            <button type="button" onClick={clearForm}>
              Cancel Edit
            </button>
          )}
        </form>
      </section>

      <hr />

      <section>
        <h2>Employee Records</h2>

        <input
          type="search"
          placeholder="Search employee by name"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={filterDepartment}
          onChange={(event) =>
            setFilterDepartment(event.target.value)
          }
        >
          <option value="All">All Departments</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="HR">HR</option>
          <option value="Design">Design</option>
        </select>

        <p>Matching Records: {filteredEmployees.length}</p>

        {filteredEmployees.length === 0 ? (
          <p>No matching employees found.</p>
        ) : (
          filteredEmployees.map((employee) => (
            <article key={employee.id}>
              <h3>{employee.name}</h3>

              <p>Department: {employee.department}</p>

              <p>
                Monthly Salary: ₹
                {employee.salary.toLocaleString("en-IN")}
              </p>

              <button
                type="button"
                onClick={() => handleEdit(employee)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(employee.id)}
              >
                Delete
              </button>

              <hr />
            </article>
          ))
        )}
      </section>

      <button type="button" onClick={handleReset}>
        Reset All Employees
      </button>
    </main>
  );
}

export default Task3App;