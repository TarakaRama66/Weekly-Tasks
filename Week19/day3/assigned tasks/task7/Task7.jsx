import { useState, useEffect } from "react";
 
function Task7() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    fetchUsers();
  }, []);
 
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
 
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
 
      const data = await response.json();
 
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
 
  if (loading) {
    return <h1>Loading Users...</h1>;
  }
 
  if (error) {
    return <h1>{error}</h1>;
  }
 
  return (
    <div className="container">
      <h1>User Directory</h1>
 
      <div className="grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Task7;