//basic employee details
class Employee {
    #salary;
    constructor(id, name, email, age, department, salary) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }
    get salary() {
        return this.#salary;
    }
    set salary(value) {
        value = Number(value);
        if (!Number.isFinite(value) || value < 10000) {
            throw new Error("Salary must be at least 10000!");
        }
        this.#salary = value;
    }
    get role() {
        return "Employee";
    }
    get annualSalary() {
        return this.salary * 12;
    }
    displayDetails() {
        return `
            Employee ID: ${this.id}
            Name: ${this.name}
            Department: ${this.department}
            Role: ${this.role}
            Salary: ${this.salary}
        `;
    }
    toJSON() {
        return {
            type: this.role,
            id: this.id,
            name: this.name,
            email: this.email,
            age: this.age,
            department: this.department,
            salary: this.salary
        };
    }
    static calculateTotalSalary(employees) {
        return employees.reduce(
            (total, employee) => total + employee.salary,
            0
        );
    }
}
//developer class
class Developer extends Employee {
    constructor(
        id, name, email, age, department, salary, language
    ) {
        super(id, name, email, age, department, salary);
        this.language = language;
    }
    get role() {
        return "Developer";
    }
    displayDetails() {
        return super.displayDetails() +
            `\nProgramming Language: ${this.language}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            language: this.language
        };
    }
}
//inheritance
class Manager extends Employee {
    constructor(
        id, name, email, age, department, salary, teamSize
    ) {
        super(id, name, email, age, department, salary);
        this.teamSize = teamSize;
    }
    get role() {
        return "Manager";
    }
    displayDetails() {
        return super.displayDetails() +
            `\nTeam Size: ${this.teamSize}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            teamSize: this.teamSize
        };
    }
}
//dom elements
const employeeForm = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("search");
const departmentFilter =
    document.getElementById("filterDepartment");
const roleInput = document.getElementById("role");
const extraField = document.getElementById("extraField");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
//employee data
let employees = [];
let editingId = null;
//create object from saved data
function createEmployee(data) {
    if (data.type === "Developer") {
        return new Developer(
            data.id,
            data.name,
            data.email,
            data.age,
            data.department,
            data.salary,
            data.language
        );
    }
    if (data.type === "Manager") {
        return new Manager(
            data.id,
            data.name,
            data.email,
            data.age,
            data.department,
            data.salary,
            data.teamSize
        );
    }
    return new Employee(
        data.id,
        data.name,
        data.email,
        data.age,
        data.department,
        data.salary
    );
}
//local storage
function saveEmployees() {
    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );
}
function loadEmployees() {
    const savedData = JSON.parse(
        localStorage.getItem("employees") || "[]"
    );
    employees = savedData.map(createEmployee);
}
//dynamic extra field
roleInput.addEventListener("change", function () {
    extraField.innerHTML = "";
    if (roleInput.value === "Developer") {
        extraField.innerHTML = `
            <input
                type="text"
                id="language"
                placeholder="Programming Language"
                required
            >
        `;
    }
    else if (roleInput.value === "Manager") {
        extraField.innerHTML = `
            <input
                type="number"
                id="teamSize"
                placeholder="Team Size"
                min="1"
                required
            >
        `;
    }
});
//add and update
employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    try {
        const name =
            document.getElementById("name").value.trim();
        const email =
            document.getElementById("email").value.trim();
        const age =
            Number(document.getElementById("age").value);
        const department =
            document.getElementById("department").value;
        const role = roleInput.value;
        const salary =
            Number(document.getElementById("salary").value);
        if (!name || !email || !department || !role) {
            throw new Error("Please fill all required fields.");
        }
        if (age < 18 || !Number.isInteger(age)) {
            throw new Error("Employee age must be at least 18.");
        }
        if (!Number.isFinite(salary) || salary < 10000) {
            throw new Error("Minimum salary is 10000.");
        }
        let employee;
        const id = editingId || Date.now();
        if (role === "Developer") {
            const language =
                document.getElementById("language")?.value.trim();
            if (!language) {
                throw new Error("Enter programming language.");
            }
            employee = new Developer(
                id, name, email, age,
                department, salary, language
            );
        }
        else if (role === "Manager") {
            const teamSize =
                Number(document.getElementById("teamSize")?.value);
            if (!Number.isInteger(teamSize) || teamSize < 1) {
                throw new Error("Enter a valid team size.");
            }
            employee = new Manager(
                id, name, email, age,
                department, salary, teamSize
            );
        }
        else {
            employee = new Employee(
                id, name, email, age,
                department, salary
            );
        }
        if (editingId !== null) {
            const index = employees.findIndex(
                emp => emp.id === editingId
            );
            if (index !== -1) {
                employees[index] = employee;
            }
        } else {
            employees.push(employee);
        }
        saveEmployees();
        displayEmployees();
        updateStatistics();
        resetForm();
    }
    catch (error) {
        alert(error.message);
    }
});
//display employees
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return entities[character];
    });
}
function displayEmployees(list = employees) {
    employeeList.innerHTML = "";
    if (list.length === 0) {
        employeeList.innerHTML =
            `<p class="empty-message">No employees found.</p>`;
        return;
    }
    list.forEach(employee => {
        const card = document.createElement("div");
        card.className = "employee-card";
        card.innerHTML = `
            <h3>${escapeHTML(employee.name)}</h3>
            <p><b>ID:</b> ${escapeHTML(employee.id)}</p>
            <p><b>Email:</b> ${escapeHTML(employee.email)}</p>
            <p><b>Age:</b> ${employee.age}</p>
            <p><b>Department:</b>
                ${escapeHTML(employee.department)}
            </p>
            <p><b>Role:</b> ${escapeHTML(employee.role)}</p>
            <p><b>Salary:</b> ₹${employee.salary.toLocaleString("en-IN")}</p>
            <p><b>Annual Salary:</b>
                ₹${employee.annualSalary.toLocaleString("en-IN")}
            </p>
            ${
                employee instanceof Developer
                    ? `<p><b>Language:</b> ${escapeHTML(employee.language)}</p>`
                    : ""
            }
            ${
                employee instanceof Manager
                    ? `<p><b>Team Size:</b> ${employee.teamSize}</p>`
                    : ""
            }
            <button class="edit-btn" data-action="edit">
                Edit
            </button>
            <button class="delete-btn" data-action="delete">
                Delete
            </button>
        `;
        card.querySelector('[data-action="edit"]')
            .addEventListener("click", () => editEmployee(employee.id));
        card.querySelector('[data-action="delete"]')
            .addEventListener("click", () => deleteEmployee(employee.id));
        employeeList.appendChild(card);
    });
}
//edit employee
function editEmployee(id) {
    const employee = employees.find(
        emp => emp.id === id
    );
    if (!employee) return;
    editingId = id;
    document.getElementById("name").value = employee.name;
    document.getElementById("email").value = employee.email;
    document.getElementById("age").value = employee.age;
    document.getElementById("department").value =
        employee.department;
    document.getElementById("salary").value = employee.salary;
    roleInput.value = employee.role;
    roleInput.dispatchEvent(new Event("change"));
    if (employee instanceof Developer) {
        document.getElementById("language").value =
            employee.language;
    }
    if (employee instanceof Manager) {
        document.getElementById("teamSize").value =
            employee.teamSize;
    }
    document.getElementById("formTitle").textContent =
        "Edit Employee";
    submitBtn.textContent = "Update Employee";
    cancelBtn.hidden = false;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
//delete employee
function deleteEmployee(id) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this employee?"
    );
    if (!confirmDelete) return;
    employees = employees.filter(
        employee => employee.id !== id
    );
    saveEmployees();
    displayEmployees();
    updateStatistics();
    if (editingId === id) {
        resetForm();
    }
}
//search employee
searchInput.addEventListener("input", filterEmployees);
departmentFilter.addEventListener("change", filterEmployees);
function filterEmployees() {
    const searchValue =
        searchInput.value.toLowerCase().trim();
    const department =
        departmentFilter.value;
    const filteredEmployees = employees.filter(employee => {
        const matchesSearch =
            employee.name.toLowerCase().includes(searchValue) ||
            String(employee.id).includes(searchValue);
        const matchesDepartment =
            department === "" ||
            employee.department === department;
        return matchesSearch && matchesDepartment;
    });
    displayEmployees(filteredEmployees);
}
//update statistics
function updateStatistics() {
    const total = employees.length;
    const totalSalary =
        Employee.calculateTotalSalary(employees);
    const averageSalary =
        total === 0 ? 0 : totalSalary / total;
    document.getElementById("totalEmployees").textContent =
        total;
    document.getElementById("totalSalary").textContent =
        "₹" + totalSalary.toLocaleString("en-IN");
    document.getElementById("averageSalary").textContent =
        "₹" + Math.round(averageSalary).toLocaleString("en-IN");
}
//reset form
function resetForm() {
    employeeForm.reset();
    editingId = null;
    extraField.innerHTML = "";
    document.getElementById("formTitle").textContent =
        "Add Employee";
    submitBtn.textContent = "Add Employee";
    cancelBtn.hidden = true;
}
cancelBtn.addEventListener("click", resetForm);
//initialize application
loadEmployees();
displayEmployees();
updateStatistics();