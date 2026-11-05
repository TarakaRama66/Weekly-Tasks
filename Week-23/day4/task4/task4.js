
const employees = [
    { id: 1, name: "Rahul", department: "IT", salary: 30000 },
    { id: 2, name: "Priya", department: "HR", salary: 35000 },
    { id: 3, name: "Kiran", department: "Finance", salary: 40000 },
    { id: 4, name: "Sneha", department: "IT", salary: 45000 }
];

let updatedEmployees = [...employees];

const output = document.getElementById("output");

// Display employees
function displayEmployees() {
    displayResult(updatedEmployees);
}

// 1. Pure function - calculate salary with bonus
function calculateSalary(employee) {
    return {
        ...employee,
        salary: employee.salary + 5000
    };
}

function calculateSalaries() {
    updatedEmployees = updatedEmployees.map(calculateSalary);

    displayResult(updatedEmployees);
}

// 2. Update employee without modifying original object
function updateEmployee() {
    updatedEmployees = updatedEmployees.map(employee =>
        employee.id === 2
            ? { ...employee, salary: 50000 }
            : employee
    );

    displayResult(updatedEmployees);
}

// 3. Remove employee without modifying original array
function removeEmployee() {
    updatedEmployees = updatedEmployees.filter(employee =>
        employee.id !== 3
    );

    displayResult(updatedEmployees);
}

// 4. Add employee without modifying original array
function addEmployee() {
    const newEmployee = {
        id: 5,
        name: "Arjun",
        department: "Marketing",
        salary: 32000
    };

    updatedEmployees = [...updatedEmployees, newEmployee];

    displayResult(updatedEmployees);
}

// 5. Compare original and updated arrays
function compareArrays() {
    output.innerHTML = `
        <h3>Original Employees</h3>
        ${createEmployeeHTML(employees)}

        <h3>Updated Employees</h3>
        ${createEmployeeHTML(updatedEmployees)}
    `;
}

// Reusable HTML function
function createEmployeeHTML(data) {
    return data.map(employee => `
        <p>
            ID: ${employee.id}<br>
            Name: ${employee.name}<br>
            Department: ${employee.department}<br>
            Salary: ₹${employee.salary}
        </p>
        <hr>
    `).join("");
}

// Reusable display function
function displayResult(data) {
    output.innerHTML = `
        <h3>Employee Records</h3>
        ${createEmployeeHTML(data)}
    `;
}
