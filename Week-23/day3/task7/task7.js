const output = document.getElementById("output");
const API_URL = "https://jsonplaceholder.typicode.com/users";
// GET All Users
async function getUsers() {
    output.innerHTML = "Loading Users...";
    const response = await fetch(API_URL);
    const users = await response.json();
    output.innerHTML = "";
    users.forEach(user => {
        output.innerHTML += `
            <div>
                <h3>${user.name}</h3>
                <p>ID: ${user.id}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>City: ${user.address.city}</p>
            </div>
            <hr>
        `;
    });
}
//GET Single User
async function getSingleUser() {
    output.innerHTML = "Loading User...";
    const response = await fetch(`${API_URL}/1`);
    const user = await response.json();
    output.innerHTML = `
        <h3>Single User Details</h3>
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
    `;
}
// POST - Add New User
async function addUser() {
    output.innerHTML = "Adding User...";
    const newUser = {
        name: "Taraka",
        email: "taraka@gmail.com",
        phone: "9876543210"
    };
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    const data = await response.json();
    output.innerHTML = `
        <h3>User Added Successfully!</h3>
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
    `;
}
//PUT - Update User
async function updateUser() {
    output.innerHTML = "Updating User...";
    const updatedUser = {
        name: "Taraka Ram",
        email: "taraka.updated@gmail.com",
        phone: "9999999999"
    };
    const response = await fetch(`${API_URL}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });
    const data = await response.json();
    output.innerHTML = `
        <h3>User Updated Successfully!</h3>
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
    `;
}
//DELETE User
async function deleteUser() {
    output.innerHTML = "Deleting User...";
    const response = await fetch(`${API_URL}/1`, {
        method: "DELETE"
    });
    if (response.ok) {
        output.innerHTML = "User Deleted Successfully!";
    } else {
        output.innerHTML = "Unable to Delete User.";
    }
}