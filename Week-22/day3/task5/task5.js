const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
const message = document.getElementById("message");

// Add a new item dynamically
addBtn.addEventListener("click", function () {
    const value = itemInput.value.trim();

    if (value === "") {
        message.textContent = "Please enter an item.";
        return;
    }

    const li = document.createElement("li");
    li.textContent = value + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    itemInput.value = "";
    message.textContent = "Item added successfully!";
});

// Event delegation: one listener handles all Delete buttons
itemList.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        const li = event.target.closest("li");
        li.remove();

        message.textContent = "Item deleted successfully!";
    }
});
