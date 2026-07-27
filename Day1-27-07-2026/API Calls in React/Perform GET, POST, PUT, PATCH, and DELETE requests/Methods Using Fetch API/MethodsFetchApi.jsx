import { useEffect, useState } from "react";

function MethodsFetchApi() {
  const [users, setUsers] = useState([]);

  //get Request
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
      console.log("GET:", data);
    } catch (error) {
      console.log(error.message);
    }
  }

  // Post Request
  async function addUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Gupta",
            email: "gupta@gmail.com",
          }),
        }
      );

      const data = await response.json();
      console.log("POST:", data);
      alert("User Added");
    } catch (error) {
      console.log(error.message);
    }
  }

  //Put Request
  async function updateUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            name: "Taraka",
            email: "taraka@gmail.com",
          }),
        }
      );

      const data = await response.json();
      console.log("PUT:", data);
      alert("User Updated");
    } catch (error) {
      console.log(error.message);
    }
  }

  //Patch Request
  async function updateEmail() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "newemail@gmail.com",
          }),
        }
      );

      const data = await response.json();
      console.log("PATCH:", data);
      alert("Email Updated");
    } catch (error) {
      console.log(error.message);
    }
  }

  //Delete Request
  async function deleteUser() {
    try {
      await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "DELETE",
        }
      );

      alert("User Deleted");
      console.log("DELETE: Success");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>React API Calls - Fetch API</h1>
      <button onClick={getUsers}>GET Users</button>
      <button onClick={addUser}>POST User</button>
      <button onClick={updateUser}>PUT User</button>
      <button onClick={updateEmail}>PATCH Email</button>
      <button onClick={deleteUser}>DELETE User</button>
      <hr></hr>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
export default MethodsFetchApi;