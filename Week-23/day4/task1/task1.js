
const employees = [
    {
        id: 1,
        name: "Rahul",
        department: "IT",
        salary: 45000,
        experience: 4
    },
    {
        id: 2,
        name: "Priya",
        department: "HR",
        salary: 30000,
        experience: 2
    },
    {
        id: 3,
        name: "Kiran",
        department: "IT",
        salary: 55000,
        experience: 5
    },
    {
        id: 4,
        name: "Sneha",
        department: "Finance",
        salary: 35000,
        experience: 3
    },
    {
        id: 5,
        name: "Arjun",
        department: "IT",
        salary: 25000,
        experience: 1
    }
];

const output = document.getElementById("output");

// Display all employees using map()
function displayEmployees() {

    const result = employees.map(employee => `
        <p>
            ID: ${employee.id} <br>
            Name: ${employee.name} <br>
            Department: ${employee.department} <br>
            Salary: ₹${employee.salary} <br>
            Experience: ${employee.experience} years
        </p>
        <hr>
    `);

    output.innerHTML = result.join("");
}

// Filter employees by department
function filterByDepartment() {

    const result = employees.filter(employee =>
        employee.department === "IT"
    );

    displayResult(result);
}

// Filter employees with salary above 30000
function filterBySalary() {

    const result = employees.filter(employee =>
        employee.salary > 30000
    );

    displayResult(result);
}

// Filter employees with experience above 3 years
function filterByExperience() {

    const result = employees.filter(employee =>
        employee.experience > 3
    );

    displayResult(result);
}

// Sort employees by salary (highest first)
function sortBySalary() {

    const result = [...employees].sort((a, b) =>
        b.salary - a.salary
    );

    displayResult(result);
}

// Calculate total employee salary using reduce()
function calculateTotalSalary() {

    const total = employees.reduce((sum, employee) => {
        return sum + employee.salary;
    }, 0);

    output.innerHTML = `
        <h3>Total Employee Salary: ₹${total}</h3>
    `;
}

// Reusable display function
function displayResult(data) {

    output.innerHTML = data.map(employee => `
        <p>
            Name: ${employee.name} <br>
            Department: ${employee.department} <br>
            Salary: ₹${employee.salary} <br>
            Experience: ${employee.experience} years
        </p>
        <hr>
    `).join("");
}
