
const fetchBtn = document.getElementById("fetchBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");
const userList = document.getElementById("userList");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Display users in the UI
function displayUsers(users) {
    userList.innerHTML = "";

    if (users.length === 0) {
        status.textContent = "No users found.";
        return;
    }

    users.forEach((user) => {
        const card = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        const city = document.createElement("p");
        city.textContent = "City: " + user.address.city;

        const company = document.createElement("p");
        company.textContent = "Company: " + user.company.name;

        card.append(name, email, city, company);
        userList.appendChild(card);
    });

    status.textContent = `Successfully loaded ${users.length} users.`;
}

// Fetch users from the public API
async function fetchUsers() {
    fetchBtn.disabled = true;
    status.textContent = "Loading users...";
    userList.innerHTML = "";

    try {
        const response = await fetch(API_URL);

        // fetch() does not reject automatically for HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        if (!Array.isArray(users)) {
            throw new Error("Invalid API response.");
        }

        displayUsers(users);
    } catch (error) {
        status.textContent = "Error loading users: " + error.message;
    } finally {
        fetchBtn.disabled = false;
    }
}

// Fetch button
fetchBtn.addEventListener("click", fetchUsers);

// Clear button
clearBtn.addEventListener("click", () => {
    userList.innerHTML = "";
    status.textContent = "User list cleared.";
});
