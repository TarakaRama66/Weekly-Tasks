const employeeForm = document.getElementById("employeeForm");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const employeeList = document.getElementById("employeeList");
const clearBtn = document.getElementById("clearBtn");

// Retrieve existing employees from Local Storage
let employees = JSON.parse(
    localStorage.getItem("employees")
) || [];

// Display employees in the UI
function displayEmployees() {
    employeeList.innerHTML = "";

    employees.forEach(function (employee) {
        const li = document.createElement("li");

        li.textContent =
            employee.name + " - " + employee.department;

        employeeList.appendChild(li);
    });
}

// Save a new employee
employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const employee = {
        id: Date.now(),
        name: nameInput.value.trim(),
        department: departmentInput.value.trim()
    };

    if (!employee.name || !employee.department) {
        alert("Please fill in all fields.");
        return;
    }

    employees.push(employee);

    // Convert array into JSON and save it
    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    displayEmployees();

    employeeForm.reset();
});

// Clear all saved employees
clearBtn.addEventListener("click", function () {
    employees = [];

    localStorage.removeItem("employees");

    displayEmployees();
});

// Display saved data when the page loads
displayEmployees();