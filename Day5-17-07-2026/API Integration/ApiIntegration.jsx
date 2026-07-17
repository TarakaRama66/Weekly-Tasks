import { useEffect, useState } from "react";
import axios from "axios";

function ApiIntegration() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET
  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (err) {
        console.log(err.message);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // POST
  const addUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "Gupta",
          email: "gupta@gmail.com",
        }
      );

      alert("User Added");
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // PUT
  const replaceUser = async () => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          id: 1,
          name: "Tilak",
          email: "tilak@gmail.com",
        }
      );

      alert("User Replaced");
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // PATCH
  const updateUser = async () => {
    try {
      const response = await axios.patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Taraka",
        }
      );

      alert("User Updated");
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // DELETE
  const deleteUser = async () => {
    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      alert("User Deleted");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>API Integration Example</h2>

      <button onClick={getUsers}>GET</button>
      <button onClick={addUser}>POST</button>
      <button onClick={replaceUser}>PUT</button>
      <button onClick={updateUser}>PATCH</button>
      <button onClick={deleteUser}>DELETE</button>

      <hr />

      {users.map((user) => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
}

export default ApiIntegration;