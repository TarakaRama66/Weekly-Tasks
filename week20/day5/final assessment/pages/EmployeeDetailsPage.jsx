import { Link, useParams } from "react-router-dom";
import { useEmployeeContext } from "../context/EmployeeContext";

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const { state } = useEmployeeContext();

  if (state.loading) {
    return <p role="status">Loading employee details...</p>;
  }

  const employee = state.employees.find(
    (item) => item.id === id
  );

  if (!employee) {
    return (
      <main>
        <h1>Employee Not Found</h1>
        <Link to="/employees">Back to Employees</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Employee Details</h1>

      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>
      <p>Status: {employee.status}</p>

      <Link to="/employees">Back to Employees</Link>
    </main>
  );
}