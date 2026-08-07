import { useEffect, useState } from "react";
import EmployeeCard from "./Card";
import { getEmployees } from "./EmployeeService";

function EmpApp() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading Employee Details...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ width: "700px", margin: "20px auto" }}>
      <h1>Employee Directory</h1>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee}/>
      ))}
    </div>
  );
}
export default EmpApp;