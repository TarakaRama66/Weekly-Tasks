const output = document.getElementById("output");
const API_URL = "https://jsonplaceholder.typicode.com/users";
// TASK 1: Get All Users with Error Handling
async function getUsers() {
    output.innerHTML = "Loading Users...";
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to Fetch Users");
        }
        const users = await response.json();
        output.innerHTML = "<h3>User List</h3>";
        users.forEach(user => {
            output.innerHTML += `
                <div>
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                </div>
                <hr>
            `;
        });
    } catch (error) {
        output.innerHTML = `
            <p>Error: ${error.message}</p>
        `;
    } finally {
        console.log("User API Request Completed");
    }
}
//Get Single User
async function getSingleUser() {
    output.innerHTML = "Loading User...";
    try {
        const response = await fetch(`${API_URL}/1`);
        if (!response.ok) {
            throw new Error("User Not Found");
        }
        const user = await response.json();
        output.innerHTML = `
            <h3>User Details</h3>
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
        `;
    } catch (error) {
        output.innerHTML = "Error: " + error.message;
    } finally {
        console.log("Single User Request Completed");
    }
}
// Test HTTP Error (404)
async function invalidAPI() {
    output.innerHTML = "Checking Invalid API...";
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/invalid"
        );
        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }
        const data = await response.json();
        output.innerHTML = JSON.stringify(data);
    } catch (error) {
        output.innerHTML = `
            <h3>API Error</h3>
            <p>${error.message}</p>
        `;
    } finally {
        console.log("Invalid API Request Completed");
    }
}
// Test Network Error
async function networkError() {
    output.innerHTML = "Connecting to Server...";
    try {
        const response = await fetch(
            "https://invalid-server-example-12345.com/users"
        );
        if (!response.ok) {
            throw new Error("Server Request Failed");
        }
        const data = await response.json();
        output.innerHTML = JSON.stringify(data);
    } catch (error) {
        output.innerHTML = `
            <h3>Network Error</h3>
            <p>Unable to connect to the server.</p>
            <p>${error.message}</p>
        `;
    } finally {
        console.log("Network Request Completed");
    }
}