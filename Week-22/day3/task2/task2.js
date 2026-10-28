const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function () {
    const itemText = itemInput.value.trim();
    if (itemText === "") {
        alert("Please enter an item!");
        return;
    }
    // Create a new list item
    const li = document.createElement("li");
    // Add text to the list item
    li.textContent = itemText + " ";
    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    // Remove the list item when clicked
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    // Add the delete button to the list item
    li.appendChild(deleteBtn);
    // Add the list item to the list
    itemList.appendChild(li);
    // Clear the input field
    itemInput.value = "";
    itemInput.focus();
});