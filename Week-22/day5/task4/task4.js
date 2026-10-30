// Creating Employee Class
class Employee {
    // Constructor
    constructor(name, age, role, salary) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.salary = salary;
    }
    // Instance Method
    getDetails() {
        return `
            Name: ${this.name}
            Age: ${this.age}
            Role: ${this.role}
            Salary: ₹${this.salary}
        `;
    }
    // Instance Method
    getAnnualSalary() {
        return this.salary * 12;
    }
}
// Employee Array
const employees = [];
// Selecting HTML Elements
const employeeForm = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");
// Add Employee
employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Getting Input Values
    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const role = document.getElementById("role").value.trim();
    const salary = Number(document.getElementById("salary").value);
    // Validation
    if (!name || !role || age <= 0 || salary <= 0) {
        alert("Please enter valid employee details.");
        return;
    }
    // Creating Class Object
    const employee = new Employee(name, age, role, salary);
    // Adding Employee
    employees.push(employee);
    // Display Employees
    displayEmployees();
    // Reset Form
    employeeForm.reset();
});
// Display Employee Details
function displayEmployees() {
    employeeList.innerHTML = "";
    employees.forEach(function (employee, index) {
        const div = document.createElement("div");
        const details = document.createElement("p");
        details.textContent = employee.getDetails();
        const annualSalary = document.createElement("p");
        annualSalary.textContent =
            "Annual Salary: ₹" + employee.getAnnualSalary();
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
        employeeList.appendChild(
            document.createElement("hr")
        );
    });
}