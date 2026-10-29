
const API_URL = "https://jsonplaceholder.typicode.com/users";

const employeeForm = document.getElementById("employeeForm");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const patchBtn = document.getElementById("patchBtn");
const deleteBtn = document.getElementById("deleteBtn");

const status = document.getElementById("status");
const employeeList = document.getElementById("employeeList");

// Display employees in the UI
function displayEmployees(employees) {
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

        const salary = document.createElement("p");
        salary.textContent =
            "Salary: " + (employee.salary ?? "Not provided");

        card.append(name, email, salary);
        employeeList.appendChild(card);
    });
}

// Reusable API function
async function apiRequest(url, method = "GET", data = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (data !== null) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    // DELETE may return an empty response body
    if (response.status === 204) {
        return null;
    }

    return response.json();
}

// GET: Read employees
async function getEmployees() {
    status.textContent = "Loading employees...";
    employeeList.innerHTML = "";

    try {
        const employees = await apiRequest(API_URL);

        if (!Array.isArray(employees) || employees.length === 0) {
            status.textContent = "No employees found.";
            return;
        }

        displayEmployees(employees);
        status.textContent = `Loaded ${employees.length} employees.`;
    } catch (error) {
        status.textContent = "GET failed: " + error.message;
    }
}

// POST: Create employee
employeeForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const employee = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        salary: Number(document.getElementById("salary").value)
    };

    if (!employee.name || !employee.email || employee.salary <= 0) {
        status.textContent = "Please enter valid employee details.";
        return;
    }

    status.textContent = "Adding employee...";

    try {
        const result = await apiRequest(API_URL, "POST", employee);

        status.textContent =
            "Employee created successfully. ID: " + result.id;

        // The public demo API does not permanently save this employee.
        displayEmployees([result]);
        employeeForm.reset();
    } catch (error) {
        status.textContent = "POST failed: " + error.message;
    }
});

// PUT: Replace employee data
putBtn.addEventListener("click", async () => {
    status.textContent = "Replacing employee data...";

    const updatedEmployee = {
        name: "Updated Employee",
        email: "updated@example.com",
        salary: 50000
    };

    try {
        const result = await apiRequest(
            `${API_URL}/1`,
            "PUT",
            updatedEmployee
        );

        displayEmployees([result]);
        status.textContent = "PUT successful: employee replaced.";
    } catch (error) {
        status.textContent = "PUT failed: " + error.message;
    }
});

// PATCH: Update selected fields
patchBtn.addEventListener("click", async () => {
    status.textContent = "Updating employee name...";

    try {
        const result = await apiRequest(
            `${API_URL}/1`,
            "PATCH",
            { name: "Patched Employee" }
        );

        displayEmployees([result]);
        status.textContent = "PATCH successful: employee updated.";
    } catch (error) {
        status.textContent = "PATCH failed: " + error.message;
    }
});

// DELETE: Remove employee
deleteBtn.addEventListener("click", async () => {
    status.textContent = "Deleting employee...";

    try {
        await apiRequest(`${API_URL}/1`, "DELETE");

        employeeList.innerHTML = "";
        status.textContent = "DELETE successful: employee removed.";
    } catch (error) {
        status.textContent = "DELETE failed: " + error.message;
    }
});

// GET button
getBtn.addEventListener("click", getEmployees);
