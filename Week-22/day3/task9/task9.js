const form = document.getElementById("employeeForm");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const employeeList = document.getElementById("employeeList");
const saveBtn = document.getElementById("saveBtn");

// Retrieve employees from Local Storage
let employees = JSON.parse(
    localStorage.getItem("employees")
) || [];

let editId = null;

// Save employees to Local Storage
function saveEmployees() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

// Display employee records
function displayEmployees() {
    employeeList.innerHTML = "";

    employees.forEach(function (employee) {
        const li = document.createElement("li");
        const details = document.createElement("span");

        details.textContent =
            employee.name + " - " + employee.department + " ";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function () {
            nameInput.value = employee.name;
            departmentInput.value = employee.department;

            editId = employee.id;
            saveBtn.textContent = "Update Employee";
        });

        li.appendChild(details);
        li.appendChild(editBtn);
        employeeList.appendChild(li);
    });
}

// Add or update employee
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const department = departmentInput.value.trim();

    if (!name || !department) {
        alert("Please fill in all fields.");
        return;
    }

    if (editId !== null) {
        // Update existing employee
        employees = employees.map(function (employee) {
            if (employee.id === editId) {
                return {
                    ...employee,
                    name: name,
                    department: department
                };
            }

            return employee;
        });

        editId = null;
        saveBtn.textContent = "Add Employee";
    } else {
        // Add a new employee
        employees.push({
            id: Date.now(),
            name: name,
            department: department
        });
    }

    saveEmployees();
    displayEmployees();
    form.reset();
});

// Display saved data when the page loads
displayEmployees();