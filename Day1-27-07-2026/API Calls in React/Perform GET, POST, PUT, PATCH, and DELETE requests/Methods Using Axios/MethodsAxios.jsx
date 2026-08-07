import { useEffect, useState } from "react";
import axios from "axios";

function MethodsAxios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
      console.log("GET:", response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function addUser() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "Gupta",
          email: "gupta@gmail.com",
        }
      );

      console.log("POST:", response.data);
      alert("User Added");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateUser() {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          id: 1,
          name: "Taraka",
          email: "taraka@gmail.com",
        }
      );

      console.log("PUT:", response.data);
      alert("User Updated");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateEmail() {
    try {
      const response = await axios.patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          email: "newemail@gmail.com",
        }
      );

      console.log("PATCH:", response.data);
      alert("Email Updated");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteUser() {
    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      console.log("DELETE: Success");
      alert("User Deleted");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>React API Calls - Axios</h1>

      <button onClick={getUsers}>GET Users</button>
      <button onClick={addUser}>POST User</button>
      <button onClick={updateUser}>PUT User</button>
      <button onClick={updateEmail}>PATCH Email</button>
      <button onClick={deleteUser}>DELETE User</button>

      <hr />

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default MethodsAxios;