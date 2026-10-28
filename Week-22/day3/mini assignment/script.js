const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDescription = document.getElementById("taskDescription");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const errorMessage = document.getElementById("errorMessage");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");

const STORAGE_KEY = "taskManagementTasks";

let tasks = loadTasks();
let editingTaskId = null;

// Load saved tasks from Local Storage
function loadTasks() {
    try {
        const savedTasks = JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        );
        if (!Array.isArray(savedTasks)) {
            return [];
        }
        return savedTasks.filter(function (task) {
            return task &&
                typeof task.id === "string" &&
                typeof task.title === "string" &&
                typeof task.description === "string" &&
                typeof task.completed === "boolean";
        });
    } catch (error) {
        return [];
    }
}
// Save tasks to Local Storage
function saveTasks() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(tasks)
        );
        return true;
    } catch (error) {
        errorMessage.textContent =
            "Unable to save tasks. Check browser storage.";
        return false;
    }
}
// Reset form to Add Task mode
function resetForm() {
    taskForm.reset();
    editingTaskId = null;
    submitBtn.textContent = "Add Task";
    cancelBtn.hidden = true;
    errorMessage.textContent = "";
}
// Form validation
function validateTask(title, description) {
    if (!title) {
        return "Task title is required.";
    }
    if (title.length < 3) {
        return "Task title must contain at least 3 characters.";
    }
    if (title.length > 100) {
        return "Task title cannot exceed 100 characters.";
    }
    if (description.length > 500) {
        return "Description cannot exceed 500 characters.";
    }
    return "";
}
// Add or Edit Task
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = taskInput.value.trim();
    const description = taskDescription.value.trim();
    const validationError = validateTask(title, description);
    if (validationError) {
        errorMessage.textContent = validationError;
        return;
    }
    errorMessage.textContent = "";
    if (editingTaskId !== null) {
        // Update an existing task
        const oldTasks = tasks;
        tasks = tasks.map(function (task) {
            if (task.id === editingTaskId) {
                return {
                    ...task,
                    title: title,
                    description: description
                };
            }
            return task;
        });
        if (!saveTasks()) {
            tasks = oldTasks;
            return;
        }
    } else {
        // Create a new task
        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            completed: false,
            createdAt: new Date().toLocaleString()
        };
        tasks.push(newTask);
        if (!saveTasks()) {
            tasks.pop();
            return;
        }
    }
    resetForm();
    renderTasks();
});
// Edit Task
function editTask(id) {
    const task = tasks.find(function (task) {
        return task.id === id;
    });
    if (!task) return;
    taskInput.value = task.title;
    taskDescription.value = task.description;
    editingTaskId = id;
    submitBtn.textContent = "Update Task";
    cancelBtn.hidden = false;
    errorMessage.textContent = "";
    taskInput.focus();
}
// Delete Task
function deleteTask(id) {
    const task = tasks.find(function (task) {
        return task.id === id;
    });
    if (!task) return;
    if (!confirm("Are you sure you want to delete this task?")) {
        return;
    }
    const oldTasks = tasks;
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });
    if (!saveTasks()) {
        tasks = oldTasks;
        return;
    }
    if (editingTaskId === id) {
        resetForm();
    }
    renderTasks();
}
// Toggle task completion
function toggleTask(id) {
    const oldTasks = tasks;
    tasks = tasks.map(function (task) {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }
        return task;
    });
    if (!saveTasks()) {
        tasks = oldTasks;
        return;
    }
    renderTasks();
}
// Create task UI
function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) {
        li.classList.add("completed");
    }
    const title = document.createElement("h3");
    title.textContent = task.title;
    const description = document.createElement("p");
    description.textContent =
        task.description || "No description provided.";

    const status = document.createElement("p");
    status.className = "task-status";
    status.textContent = task.completed
        ? "Status: Completed"
        : "Status: Pending";

    const date = document.createElement("small");
    date.textContent = "Created: " + task.createdAt;

    const completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.dataset.action = "toggle";
    completeBtn.dataset.id = task.id;
    completeBtn.textContent = task.completed
        ? "Mark Pending"
        : "Mark Completed";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.dataset.action = "edit";
    editBtn.dataset.id = task.id;
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.dataset.action = "delete";
    deleteBtn.dataset.id = task.id;
    deleteBtn.textContent = "Delete";

    li.append(
        title,
        description,
        status,
        date,
        document.createElement("br"),
        completeBtn,
        editBtn,
        deleteBtn
    );
    return li;
}
// Search, filter, and render tasks
function renderTasks() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filter = filterSelect.value;

    const filteredTasks = tasks.filter(function (task) {
        const matchesSearch =
            task.title.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm);
        const matchesFilter =
            filter === "all" ||
            (filter === "completed" && task.completed) ||
            (filter === "pending" && !task.completed);
        return matchesSearch && matchesFilter;
    });
    taskList.replaceChildren();
    filteredTasks.forEach(function (task) {
        taskList.appendChild(createTaskElement(task));
    });
    const completedCount = tasks.filter(function (task) {
        return task.completed;
    }).length;
    taskCount.textContent =
        `Total: ${tasks.length} | Pending: ${tasks.length - completedCount} | Completed: ${completedCount}`;
    emptyMessage.textContent = filteredTasks.length === 0
        ? "No tasks found."
        : "";
}
// Event delegation for task buttons
taskList.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");
    if (!button || !taskList.contains(button)) {
        return;
    }
    const id = button.dataset.id;
    const action = button.dataset.action;
    if (action === "edit") {
        editTask(id);
    } else if (action === "delete") {
        deleteTask(id);
    } else if (action === "toggle") {
        toggleTask(id);
    }
});
// Search and filter events
searchInput.addEventListener("input", renderTasks);
filterSelect.addEventListener("change", renderTasks);
// Cancel editing
cancelBtn.addEventListener("click", resetForm);
// Initial rendering
renderTasks();