import { useState } from "react";
import axios from "axios";

function LoadingSuccessFailure() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch{
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div><h1>Loading,Success,Failure</h1>
      <button onClick={getUsers}>Get Users</button>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!loading &&
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
}
export default LoadingSuccessFailure;