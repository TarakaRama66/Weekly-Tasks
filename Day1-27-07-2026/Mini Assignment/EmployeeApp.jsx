import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { getEmployees } from "./EmployeeService";

function EmployeeApp() {
  // State Variables
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API Call when component loads
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadEmployees();
  }, []);

  // Function to fetch employees
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

  // Loading State
  if (loading) {
    return <Loader />;
  }

  // Error State
  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Directory</h1>

      {employees.map((employee) => (
        <Card
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

export default EmployeeApp;