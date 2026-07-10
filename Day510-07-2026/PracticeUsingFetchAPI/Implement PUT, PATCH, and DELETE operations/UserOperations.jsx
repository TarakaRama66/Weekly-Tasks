function UserOperations() {
//Update entire user
const updateUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {method: "PUT",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({
        id: 1,
        name: "Gupta",
        email: "gupta@gmail.com",
        city: "Hyderabad",
      }),
    })
    .then((response) => response.json())
    .then((data) => console.log("PUT Response:", data));
};
// Update only email
const updateEmail = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email: "tarakgupta@gmail.com",
    }),
})
    .then((response) => response.json())
    .then((data) => console.log("PATCH Response:", data));
};
//Delete user
const deleteUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {method: "DELETE",
    })
    .then(() => console.log("DELETE Response: User Deleted"));
};
return (
    <div>
      <h1>CRUD Operations</h1>
      <button onClick={updateUser}>Update User</button>
      <br /><br />
      <button onClick={updateEmail}>Update Email</button>
      <br /><br />
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}

export default UserOperations;