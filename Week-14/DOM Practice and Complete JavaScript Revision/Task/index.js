const userForm =
  document.getElementById("userForm");
 
const nameInput =
  document.getElementById("name");
 
const emailInput =
  document.getElementById("email");
 
const userContainer =
  document.getElementById("userContainer");
 
const status =
  document.getElementById("status");
 
// Load users from localStorage
let users =
  JSON.parse(
    localStorage.getItem("users")
  ) || [];
 
// Save to localStorage
function saveUsers() {
  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );
}
 
// Display Users
function displayUsers() {
 
  userContainer.innerHTML = "";
 
  users.forEach((user, index) => {
 
    const div =
      document.createElement("div");
 
    div.classList.add("user");
 
    div.innerHTML = `
      <div>
        <h4>${user.name}</h4>
        <p>${user.email}</p>
      </div>
 
      <button
        class="delete"
        data-index="${index}">
        Delete
      </button>
    `;
 
    userContainer.appendChild(div);
  });
}
 
// Fetch Users from API
async function fetchUsers() {
 
  try {
 
    status.textContent =
      "Loading users...";
 
    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
 
    if (!response.ok) {
      throw new Error(
        "Failed to fetch users"
      );
    }
 
    const apiUsers =
      await response.json();
 
    // Only load once if localStorage empty
    if (users.length === 0) {
 
      users = apiUsers.map(user => ({
        name: user.name,
        email: user.email
      }));
 
      saveUsers();
    }
 
    displayUsers();
 
    status.textContent =
      "Users Loaded Successfully";
 
  } catch(error) {
 
    status.textContent =
      error.message;
 
    console.error(error);
  }
}
 
// Add User
userForm.addEventListener(
  "submit",
  (e) => {
 
    e.preventDefault();
 
    const name =
      nameInput.value.trim();
 
    const email =
      emailInput.value.trim();
 
    if (!name || !email) {
      alert("All fields required");
      return;
    }
 
    const user = {
      name,
      email
    };
 
    users.push(user);
 
    saveUsers();
 
    displayUsers();
 
    userForm.reset();
  }
);
 
// Event Delegation for Delete
userContainer.addEventListener(
  "click",
  (e) => {
 
    if (
      e.target.classList.contains(
        "delete"
      )
    ) {
 
      const index =
        e.target.dataset.index;
 
      users.splice(index, 1);
 
      saveUsers();
 
      displayUsers();
    }
  }
);
 
// Initial Load
fetchUsers();
 