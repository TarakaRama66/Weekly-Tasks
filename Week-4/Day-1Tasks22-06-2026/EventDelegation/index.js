const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add new task dynamically
addBtn.addEventListener("click", () => {
    const li = document.createElement("li");

    li.innerHTML = `
        ${taskInput.value}
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
});

// Event Delegation
taskList.addEventListener("click", (event) => {

    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.remove();
        console.log("Task Deleted");
    }

});