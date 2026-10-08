import { useEffect, useState } from "react";
 
function Day4Task4() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(
          `Server Error (${response.status})`
        );
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error("No Students Found");
      }
      setStudents(data);
      setLastUpdated(
        new Date().toLocaleTimeString()
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div>
      <h1>Student Management Portal</h1>
      <button onClick={fetchStudents}>Refresh Data</button>
      {loading && (
        <h2>Loading Student Records...</h2>
      )}
      {!loading && error && (
        <div>
          <h2>{error}</h2>
          <button onClick={fetchStudents}>Retry</button>
        </div>
      )}
      {!loading &&
        !error &&
        students.map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>City: {student.address.city}</p>
            <p>Company: {student.company.name}</p>
          </div>
        ))}
      {!error && students.length > 0 && (
        <h3>Last Updated: {lastUpdated}</h3>
      )}
    </div>
  );
}
export default Day4Task4;