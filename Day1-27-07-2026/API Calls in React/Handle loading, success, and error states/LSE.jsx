import { useEffect, useState } from "react";

function LSE() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // eslint-disable-next-line react-hooks/immutability
  useEffect(() => {getUsers();}, []);

  async function getUsers() {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
      setSuccess("Users loaded successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Users List</h1>
      {loading && <h3>Loading...</h3>}
      {success && <h3>{success}</h3>}
      {error && <h3>{error}</h3>}
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
export default LSE;