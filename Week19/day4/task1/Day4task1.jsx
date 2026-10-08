import { useEffect, useState } from "react";
import { getUsers } from "./api";
 
function Day4task1() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
 
  return (
    <div>
      <h2>User Data</h2>
 
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
 
export default Day4task1;