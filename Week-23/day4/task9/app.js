import {getEmployees,addNewEmployee,getTotalSalary} from "./employee.js";

const output = document.getElementById("output");

// Display employees
window.displayEmployees = function() {

    const employees = getEmployees();

    output.innerHTML = employees.map(emp => `
        <p>
            ID: ${emp.id}<br>
            Name: ${emp.name}<br>
            Salary: ₹${emp.salary}
        </p>
        <hr>
    `).join("");

};

// Add employee
window.addEmployee = function() {

    addNewEmployee();

    output.innerHTML = "<h3>Employee Added Successfully!</h3>";

};

// Calculate total salary
window.calculateSalary = function() {

    const total = getTotalSalary();

    output.innerHTML = `
        <h3>Total Salary: ₹${total}</h3>
    `;

};
