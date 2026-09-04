const input =
  document.getElementById("taskInput");
 
const addTask =
  document.getElementById("addTask");
 
const taskList =
  document.getElementById("taskList");
 
addTask.addEventListener("click", () => {
  const li = document.createElement("li");
 
  li.innerHTML = `
    ${input.value}
    <button class="delete">
      Delete
    </button>
  `;
 
  taskList.appendChild(li);
 
  input.value = "";
});
 
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
 