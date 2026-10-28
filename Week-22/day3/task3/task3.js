const message = document.getElementById("message");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");
// Add CSS classes
addBtn.addEventListener("click", function () {
    message.classList.add("highlight", "large-text");
});
// Remove CSS classes
removeBtn.addEventListener("click", function () {
    message.classList.remove("highlight", "large-text");
});
// Toggle CSS classes
toggleBtn.addEventListener("click", function () {
    message.classList.toggle("highlight");
});