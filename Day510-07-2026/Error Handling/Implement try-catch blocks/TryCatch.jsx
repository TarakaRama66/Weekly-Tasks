import axios from "axios";

function TryCatch() {

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response.data);

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <h1>Try-Catch Blockers</h1>
    <button onClick={getUsers}>Get Users</button>
    </>
  );
}

export default TryCatch;