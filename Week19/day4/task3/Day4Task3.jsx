import { useEffect, useState } from "react";
 
function Day4Task3() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEmployees = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      // Simulate network delay
      setTimeout(() => {
        setEmployees(data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div>
      <h1>Employee Management System</h1>
      {loading ? (
        <div>
          <h2>Loading Employee Data...</h2>
          <progress></progress>
          <p>Please wait while data is loading.</p>
        </div>
      ) : (
        employees.map((employee) => (
          <div
            key={employee.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }}>
            <h3>{employee.name}</h3>
            <p>Email : {employee.email}</p>
            <p>Phone : {employee.phone}</p>
            <p>Company : {employee.company.name}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Day4Task3;