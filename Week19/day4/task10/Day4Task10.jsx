import { useState } from "react";
 
function Day4Task10() {
  const [userId, setUserId] =
    useState("");
 
  const [message, setMessage] =
    useState("");
 
  const deleteUser = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "DELETE"
        }
      );
 
      if (!response.ok) {
        throw new Error(
          "Delete Operation Failed"
        );
      }
 
      setMessage(
        `User ID ${userId} Deleted Successfully`
      );
 
      setUserId("");
    } catch (error) {
      setMessage(error.message);
    }
  };
 
  return (
    <div>
      <h1>Delete User</h1>
 
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) =>
          setUserId(e.target.value)
        }
      />
 
      <button onClick={deleteUser}>
        Delete User
      </button>
 
      <h3>{message}</h3>
    </div>
  );
}
 
export default Day4Task10;