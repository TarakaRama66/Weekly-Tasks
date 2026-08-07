// Load saved name
const savedName = localStorage.getItem("username");
if (savedName) {
    document.getElementById("output").textContent =
    `Welcome back, ${savedName}!`;
}

function saveName() {
    const name = document.getElementById("nameInput").value;
    // Store in Local Storage
    localStorage.setItem("username", name);
    // Display saved value
    document.getElementById("output").textContent =
    `Hello, ${name}! Your name has been saved.`;
}