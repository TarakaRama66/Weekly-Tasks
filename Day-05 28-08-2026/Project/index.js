class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }
  complete() {
    this.completed = !this.completed;
  }
}
class PriorityTask extends Task {
  constructor(id, title) {
    super(id, title);
    this.priority = "High";
  }
}

let tasks = [];

function getTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new Task(1, "Learn Functions"),
        new PriorityTask(2, "Learn Promises"),
        new Task(3, "Practice JavaScript")
      ]);
    }, 1000);
  });
}

async function loadTasks() {
  document.querySelector("#status").textContent = "Loading...";
  tasks = await getTasks();
  document.querySelector("#status").textContent = "Tasks loaded!";
  showTasks();
}

function addTask() {
  const input = document.querySelector("#taskInput");
  const priority = document.querySelector("#priority");

  if (input.value === "") {
    alert("Enter a task!");
    return;
  }

  const id = Date.now();

  const task =
    priority.value === "high"
      ? new PriorityTask(id, input.value)
      : new Task(id, input.value);

  tasks.push(task);
  input.value = "";

  showTasks();
}

function showTasks() {
  const list = document.querySelector("#taskList");
  const search = document.querySelector("#searchInput").value.toLowerCase();

  list.innerHTML = "";

  tasks
    .filter(task =>
      task.title.toLowerCase().includes(search)
    )
    .forEach(task => {
      const div = document.createElement("div");

      div.className = "task";

      div.innerHTML = `
        <span class="${task.completed ? "completed" : ""}">
          ${task.title}
          ${task.priority ? "**" : ""}
        </span>

        <button onclick="completeTask(${task.id})">Complete</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      `;
      list.appendChild(div);
    });

  const completed =
    tasks.filter(task => task.completed).length;
  document.querySelector("#stats").textContent =
    `Total: ${tasks.length} | Completed: ${completed}`;
}

function completeTask(id) {
  const task = tasks.find(task => task.id === id);

  if (task) {
    task.complete();
  }

  showTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  showTasks();
}

document.querySelector("#addBtn")
  .addEventListener("click", addTask);

document.querySelector("#searchInput")
  .addEventListener("input", showTasks);

console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

loadTasks();
completeTask();
deleteTask();
