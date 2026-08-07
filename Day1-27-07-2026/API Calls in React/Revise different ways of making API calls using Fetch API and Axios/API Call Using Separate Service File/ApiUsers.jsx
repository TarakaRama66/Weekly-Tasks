import { useEffect, useState } from "react";
import { getUsers } from "./API";

function ApiUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function loadUsers() {
      const response = await getUsers();
      setUsers(response.data);
    }

    loadUsers();

  }, []);

  return (
    <>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </>
  );
}

export default ApiUsers;