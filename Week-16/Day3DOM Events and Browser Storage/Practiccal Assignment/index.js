const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
 
let currentFilter = "all";
renderTodos();
addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if(text === "") return;
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(todo);
    saveTodos();
    todoInput.value = "";
    renderTodos();
});
function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(todos));
}
function renderTodos() {
    todoList.innerHTML = "";
    let filteredTodos = [...todos];
    if(currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }
    if(currentFilter === "pending") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }
    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span style="text-decoration:${todo.completed? "line-through": "none"};">${todo.text}</span>
            <button class="completeBtn"data-id="${todo.id}">${todo.completed? "Undo": "Complete"}</button>
            <button class="editBtn"data-id="${todo.id}">Edit</button>
            <button class="deleteBtn"data-id="${todo.id}">Delete</button>
        `;
        todoList.appendChild(li);
    });
}
todoList.addEventListener("click",(e) => {
        const id = Number(e.target.dataset.id);
        if(e.target.classList.contains("deleteBtn")) {
            todos = todos.filter(todo => todo.id !== id);
            saveTodos();
            renderTodos();
        }
        if(e.target.classList.contains("completeBtn")) {
            todos = todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed:
                        !todo.completed
                    };
                }
                return todo;
            });
            saveTodos();
            renderTodos();
        }
        if(e.target.classList.contains("editBtn")) {
            const updatedText = prompt("Edit Todo");
            if(updatedText) {
                todos = todos.map(todo => {
                    if(todo.id === id) {
                        return {
                            ...todo,
                            text: updatedText
                        };
                    }
                    return todo;
                });
                saveTodos();
                renderTodos();
            }
        }
    }
);
document.getElementById("allBtn")
.addEventListener("click",() => {
        currentFilter = "all";
        renderTodos();
    }
);
document.getElementById("completedBtn")
.addEventListener("click",() => {
        currentFilter ="completed";
        renderTodos();
    }
);
document.getElementById("pendingBtn")
.addEventListener("click",() => {
        currentFilter ="pending";
        renderTodos();
    }
);