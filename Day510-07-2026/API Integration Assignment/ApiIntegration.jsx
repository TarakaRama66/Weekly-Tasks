import { useEffect, useState } from "react";
import axios from "axios";

function Apiintegration() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch Users
  const getUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Create User
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
    } catch {
      alert("Failed to Add User");
    }
  };

  // Update User
  const updateUser = async () => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          id: 1,
          name: "Updated Gupta",
          email: "updated@gmail.com",
        }
      );

      alert("User Updated");
      console.log(response.data);
    } catch {
      alert("Failed to Update");
    }
  };

  // Delete User
  const deleteUser = async () => {
    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      alert("User Deleted");
    } catch {
      alert("Delete Failed");
    }
  };

  // Search Filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>API Integration Assignment</h2>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <button onClick={addUser}>Add User</button>

      <button onClick={updateUser} style={{ marginLeft: "10px" }}>
        Update User
      </button>

      <button onClick={deleteUser} style={{ marginLeft: "10px" }}>
        Delete User
      </button>

      <hr />

      {loading && <h3>Loading...</h3>}

      {error && <h3>{error}</h3>}

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Apiintegration;