import {getEmployees,createEmployee,updateEmployee,deleteEmployee} from "./api";

const employeeForm = document.getElementById("employeeForm");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

const status = document.getElementById("status");
const employeeList = document.getElementById("employeeList");

let employees = [];

// Display employee data
function renderEmployees() {
    employeeList.innerHTML = "";

    if (employees.length === 0) {
        employeeList.textContent = "No employees found.";
        return;
    }

    employees.forEach((employee) => {
        const card = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = employee.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + employee.email;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Update Name";

        editBtn.addEventListener("click", async () => {
            const newName = prompt("Enter the new employee name:");

            if (!newName || !newName.trim()) {
                return;
            }

            try {
                status.textContent = "Updating employee...";

                const updated = await updateEmployee(
                    employee.id,
                    { name: newName.trim() }
                );

                employees = employees.map((item) =>
                    item.id === employee.id
                        ? { ...item, ...updated, name: newName.trim() }
                        : item
                );

                renderEmployees();
                status.textContent = "Employee updated successfully.";
            } catch (error) {
                status.textContent = "Update failed: " + error.message;
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", async () => {
            try {
                status.textContent = "Deleting employee...";

                await deleteEmployee(employee.id);

                employees = employees.filter(
                    (item) => item.id !== employee.id
                );

                renderEmployees();
                status.textContent = "Employee deleted successfully.";
            } catch (error) {
                status.textContent = "Delete failed: " + error.message;
            }
        });

        card.append(name, email, editBtn, deleteBtn);
        employeeList.appendChild(card);
    });
}

// Load employees using the API service
async function loadEmployees() {
    loadBtn.disabled = true;
    status.textContent = "Loading employees...";

    try {
        employees = await getEmployees();
        renderEmployees();

        status.textContent = `Loaded ${employees.length} employees.`;
    } catch (error) {
        status.textContent = "Failed to load employees: " + error.message;
    } finally {
        loadBtn.disabled = false;
    }
}

// Add employee using the API service
employeeForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        status.textContent = "Please enter employee name and email.";
        return;
    }

    try {
        status.textContent = "Adding employee...";

        const newEmployee = await createEmployee({ name, email });

        employees.push(newEmployee);
        renderEmployees();

        status.textContent = "Employee added successfully.";
        employeeForm.reset();
    } catch (error) {
        status.textContent = "Add failed: " + error.message;
    }
});

// Button events
loadBtn.addEventListener("click", loadEmployees);

clearBtn.addEventListener("click", () => {
    employeeList.innerHTML = "";
    status.textContent = "Output cleared.";
});

// Load employees when the page opens
loadEmployees();
