
const mode = document.getElementById("mode");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");
const userList = document.getElementById("userList");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Display users
function displayUsers(users) {
    userList.innerHTML = "";

    if (users.length === 0) {
        status.textContent = "Empty State: No users found.";
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

        card.append(name, email, city);
        userList.appendChild(card);
    });

    status.textContent = `Success: ${users.length} users loaded.`;
}

// Simulate an empty response
function getEmptyUsers() {
    return Promise.resolve([]);
}

// Fetch users and handle all three states
async function loadUsers() {
    userList.innerHTML = "";
    loadBtn.disabled = true;

    status.textContent = "Loading: Please wait...";

    try {
        let users;

        if (mode.value === "empty") {
            users = await getEmptyUsers();
        } else {
            const url = mode.value === "error"
                ? "https://jsonplaceholder.typicode.com/invalid-endpoint"
                : API_URL;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Request failed`);
            }

            users = await response.json();
        }

        if (!Array.isArray(users)) {
            throw new Error("Invalid data received from API.");
        }

        if (users.length === 0) {
            status.textContent = "Empty State: No users found.";
            return;
        }

        displayUsers(users);

    } catch (error) {
        status.textContent = "Error State: " + error.message;
        userList.innerHTML = "";
    } finally {
        loadBtn.disabled = false;
    }
}

// Load button
loadBtn.addEventListener("click", loadUsers);

// Clear button
clearBtn.addEventListener("click", () => {
    userList.innerHTML = "";
    status.textContent = "Output cleared.";
});
