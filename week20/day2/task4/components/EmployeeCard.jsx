import { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";

function EmployeeCard({ employee }) {
  const { dispatch } = useEmployees();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(employee.name);
  const [salary, setSalary] = useState(
    String(employee.salary)
  );

  function handleUpdate(event) {
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

    dispatch({
      type: "UPDATE_EMPLOYEE",
      payload: {
        id: employee.id,
        name: name.trim(),
        salary: numericSalary,
      },
    });

    setEditing(false);
  }

  function handleDelete() {
    if (window.confirm(`Delete ${employee.name}?`)) {
      dispatch({
        type: "DELETE_EMPLOYEE",
        payload: employee.id,
      });
    }
  }

  return (
    <article>
      {editing ? (
        <form onSubmit={handleUpdate}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Employee name"
            required
          />

          <input
            type="number"
            min="0"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
            placeholder="Salary"
            required
          />

          <button type="submit">Save</button>

          <button
            type="button"
            onClick={() => {
              setName(employee.name);
              setSalary(String(employee.salary));
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h3>{employee.name}</h3>
          <p>Department: {employee.department}</p>
          <p>
            Monthly Salary: ₹
            {employee.salary.toLocaleString("en-IN")}
          </p>

          <button
            type="button"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>

          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </article>
  );
}

export default EmployeeCard;