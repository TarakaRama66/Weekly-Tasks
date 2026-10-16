import { Link } from "react-router-dom";
import { useEmployeeContext } from "../context/EmployeeContext";

export default function DashboardPage() {
  const { state } = useEmployeeContext();

  if (state.loading) {
    return <p role="status">Loading dashboard...</p>;
  }

  if (state.error) {
    return <p role="alert">{state.error}</p>;
  }

  const active = state.employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  return (
    <main>
      <h1>Employee Dashboard</h1>

      <p>Total Employees: {state.employees.length}</p>
      <p>Active Employees: {active}</p>
      <p>
        Inactive Employees: {state.employees.length - active}
      </p>

      <Link to="/employees">Manage Employees</Link>
    </main>
  );
}