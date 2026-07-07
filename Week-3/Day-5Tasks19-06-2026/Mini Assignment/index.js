// Employee Array
let employees = [];

// DOM Elements
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const employeeList = document.getElementById("employeeList");
const total = document.getElementById("total");
const searchInput = document.getElementById("search");

// Current Date
const currentDate = new Date();
document.getElementById("date").innerText =
    "Today: " + currentDate.toDateString();

// Add Employee
addBtn.addEventListener("click", () => {

    let employee = {
        id: Math.floor(Math.random() * 10000),
        name: nameInput.value.trim(),
        age: Number(ageInput.value)
    };

    // Object Copy
    let copiedEmployee = { ...employee };

    employees.push(copiedEmployee);

    displayEmployees(employees);

    nameInput.value = "";
    ageInput.value = "";
});

// Display Employees
function displayEmployees(data) {

    employeeList.innerHTML = "";

    data.forEach(emp => {

        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${emp.name}</h3>
            <p>ID : ${emp.id}</p>
            <p>Age : ${emp.age}</p>
            <hr>
        `;

        employeeList.appendChild(card);
    });

    // Reduce
    total.innerText = employees.reduce(
        (count) => count + 1, 0
    );
}

// Search Employee
searchInput.addEventListener("keyup", () => {

    let searchValue =
        searchInput.value.toLowerCase();

    let filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchValue)
    );

    displayEmployees(filteredEmployees);
});

// Session Countdown Timer
let seconds = 60;

let timer = setInterval(() => {

    document.getElementById("timer").innerText =
        seconds + " seconds";

    seconds--;

    if (seconds < 0) {

        clearInterval(timer);

        document.getElementById("timer").innerText =
            "Session Expired";
    }

}, 1000);