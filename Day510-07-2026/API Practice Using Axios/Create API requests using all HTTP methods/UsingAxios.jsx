import axios from "axios";

function UsingAxios() {
  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
  };
  const addUser = async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name: "Gupta",
        email: "gupta@gmail.com",
      }
    );
    console.log(response.data);
  };
  const updateUser = async () => {
    const response = await axios.put("https://jsonplaceholder.typicode.com/users/1",
      {
        id: 1,
        name: "Gupta",
        email: "gupta@gmail.com",
      }
    );
    console.log(response.data);
  };

  const updateEmail = async () => {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        email: "tarak@gmail.com",
      }
    );
    console.log(response.data);
  };
  const deleteUser = async () => {
    await axios.delete("https://jsonplaceholder.typicode.com/users/1");
    console.log("User Deleted Successfully");
  };
  return (
    <div>
      <h2>Create API requests using all HTTP methods</h2>
      <button onClick={getUsers}>GET</button>
      <br /><br />
      <button onClick={addUser}>POST</button>
      <br /><br />
      <button onClick={updateUser}>PUT</button>
      <br /><br />
      <button onClick={updateEmail}>PATCH</button>
      <br /><br />
      <button onClick={deleteUser}>DELETE</button>
    </div>
  );
}
export default UsingAxios;