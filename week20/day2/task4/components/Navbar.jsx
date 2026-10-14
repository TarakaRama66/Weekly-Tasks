import { useEmployees } from "../context/EmployeeContext";

function Navbar() {
  const { state } = useEmployees();

  return (
    <header>
      <h1>Employee Management Dashboard</h1>
      <p>Total Employees: {state.employees.length}</p>
    </header>
  );
}

export default Navbar;