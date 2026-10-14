import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

function EmployeeManager() {
  const { state, dispatch } = useDashboard();

  const [name, setName] = useState("");
  const [departmentId, setDepartmentId] = useState("1");
  const [salary, setSalary] = useState("");

  function addEmployee(event) {
    event.preventDefault();

    const numericSalary = Number(salary);
    const numericDepartmentId = Number(departmentId);

    if (
      !name.trim() ||
      salary.trim() === "" ||
      !Number.isFinite(numericSalary) ||
      numericSalary < 0 ||
      !state.departments.some(
        (department) => department.id === numericDepartmentId
      )
    ) {
      dispatch({
        type: "SET_ERROR",
        payload: "Enter valid employee details.",
      });
      return;
    }

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        id: Date.now(),
        name: name.trim(),
        departmentId: numericDepartmentId,
        salary: numericSalary,
      },
    });

    setName("");
    setDepartmentId("1");
    setSalary("");
  }

  return (
    <section>
      <h2>Employee Management</h2>

      <form onSubmit={addEmployee}>
        <input
          placeholder="Employee name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <select
          value={departmentId}
          onChange={(event) =>
            setDepartmentId(event.target.value)
          }
        >
          {state.departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          min="0"
          placeholder="Monthly salary"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
          required
        />

        <button type="submit">Add Employee</button>
      </form>

      <h3>Employee Records</h3>

      {state.employees.map((employee) => {
        const department = state.departments.find(
          (item) => item.id === employee.departmentId
        );

        return (
          <article key={employee.id}>
            <h4>{employee.name}</h4>

            <p>Department: {department?.name ?? "Unknown"}</p>

            <p>
              Salary: ₹
              {employee.salary.toLocaleString("en-IN")}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_EMPLOYEE",
                  payload: employee.id,
                })
              }
            >
              Delete
            </button>

            <hr />
          </article>
        );
      })}
    </section>
  );
}

export default EmployeeManager;