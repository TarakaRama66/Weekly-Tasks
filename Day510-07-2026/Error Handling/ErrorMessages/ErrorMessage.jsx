import { useState } from "react";
import axios from "axios";

function ErrorMessage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const getUsers = async () => {
    setError("");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);

    } catch (error) {

      if (error.response) {
        setError("Data not found.");
      } else if (error.request) {
        setError("No internet connection.");
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <div><h1>Error Messages</h1>
      <button onClick={getUsers}>Get Users</button>

      {error && <h3>{error}</h3>}

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default ErrorMessage;