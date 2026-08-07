import { useEffect, useState } from "react";

function ApiApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <div>
        <h1>API Integration</h1>
        <h1>Users List</h1>
        {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
        ))}
    </div>
  );
}
export default ApiApp;