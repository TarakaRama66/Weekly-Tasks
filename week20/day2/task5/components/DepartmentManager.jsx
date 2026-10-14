import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

function DepartmentManager() {
  const { state, dispatch } = useDashboard();
  const [departmentName, setDepartmentName] = useState("");

  function addDepartment(event) {
    event.preventDefault();

    const name = departmentName.trim();

    if (!name) return;

    const alreadyExists = state.departments.some(
      (department) =>
        department.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      dispatch({
        type: "SET_ERROR",
        payload: "This department already exists.",
      });
      return;
    }

    dispatch({
      type: "ADD_DEPARTMENT",
      payload: {
        id: Date.now(),
        name,
      },
    });

    setDepartmentName("");
  }

  return (
    <section>
      <h2>Department Management</h2>

      <form onSubmit={addDepartment}>
        <input
          placeholder="Department name"
          value={departmentName}
          onChange={(event) =>
            setDepartmentName(event.target.value)
          }
          required
        />

        <button type="submit">Add Department</button>
      </form>

      <ul>
        {state.departments.map((department) => (
          <li key={department.id}>{department.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default DepartmentManager;