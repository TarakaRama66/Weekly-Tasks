import { useEffect, useState } from "react";

function FetchAPIGet() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
}
export default FetchAPIGet;