import { useState } from "react";
import useFetch from "../hooks/useFetch";

function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [search, setSearch] = useState("");
  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    return <p>Loading users...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <section>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}/>
      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default UserList;