import { useState } from "react";
function HandleAPIResponses() {
  const [message, setMessage] = useState("");
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setMessage("Data fetched successfully.");
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };
  return (
    <div>
      <h2>Handle API Responses and Errors</h2>
      <button onClick={getUsers}>Get Users</button>
      <p>{message}</p>
    </div>
  );
}
export default HandleAPIResponses;