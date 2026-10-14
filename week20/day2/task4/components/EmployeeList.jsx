import { useEmployees } from "../context/EmployeeContext";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  const { state, dispatch } = useEmployees();

  const totalSalary = state.employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  return (
    <section>
      <h2>Employee Records</h2>

      <p>Total Employees: {state.employees.length}</p>

      <p>
        Total Monthly Salary: ₹
        {totalSalary.toLocaleString("en-IN")}
      </p>

      {state.employees.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        state.employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))
      )}

      <button
        type="button"
        onClick={() => {
          if (window.confirm("Reset all employee records?")) {
            dispatch({ type: "RESET_EMPLOYEES" });
          }
        }}
      >
        Reset Employees
      </button>
    </section>
  );
}

export default EmployeeList;