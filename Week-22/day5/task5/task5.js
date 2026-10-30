// Parent Class
class Employee {
    constructor(name, age, role, salary) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.salary = salary;
    }
    // Parent Method
    displayDetails() {
        return `
            Name: ${this.name}
            Age: ${this.age}
            Role: ${this.role}
            Salary: ₹${this.salary}
        `;
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
// Child Class 1
class Developer extends Employee {
    constructor(name, age, role, salary, language) {
        // Calling Parent Constructor
        super(name, age, role, salary);
        this.language = language;
    }
    // Child Method
    displayDetails() {
        return super.displayDetails() +
            `\nProgramming Language: ${this.language}`;
    }
}
// Child Class 2
class Manager extends Employee {
    constructor(name, age, role, salary, teamSize) {
        // Calling Parent Constructor
        super(name, age, role, salary);
        this.teamSize = teamSize;
    }
    // Child Method
    displayDetails() {
        return super.displayDetails() +
            `\nTeam Size: ${this.teamSize}`;
    }
}
// Employee Array
const employees = [];
// HTML Elements
const employeeForm = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");
// Form Submission
employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const role = document.getElementById("role").value.trim();
    const salary = Number(document.getElementById("salary").value);
    const employeeType = document.getElementById("employeeType").value;
    if (!name || !role || age <= 0 || salary <= 0) {
        alert("Please enter valid employee details.");
        return;
    }
    let employee;
    if (employeeType === "developer") {
        const language = prompt("Enter Programming Language:");
        if (!language || !language.trim()) {
            alert("Programming language is required.");
            return;
        }
        employee = new Developer(
            name, age, role, salary, language.trim()
        );
    } else {
        const teamSize = Number(prompt("Enter Team Size:"));
        if (!Number.isInteger(teamSize) || teamSize <= 0) {
            alert("Enter a valid team size.");
            return;
        }
        employee = new Manager(
            name, age, role, salary, teamSize
        );
    }
    employees.push(employee);
    displayEmployees();
    employeeForm.reset();
});
// Display Employees
function displayEmployees() {
    employeeList.innerHTML = "";
    employees.forEach(function (employee, index) {
        const div = document.createElement("div");
        const details = document.createElement("p");
        details.textContent = employee.displayDetails();
        const annualSalary = document.createElement("p");
        annualSalary.textContent =
            "Annual Salary: ₹" +
            employee.calculateAnnualSalary();
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            employees.splice(index, 1);
            displayEmployees();
        });
        div.appendChild(details);
        div.appendChild(annualSalary);
        div.appendChild(deleteButton);
        employeeList.appendChild(div);
        employeeList.appendChild(document.createElement("hr"));
    });
}