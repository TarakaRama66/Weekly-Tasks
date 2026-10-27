const employees = [
    { id: 1, name: "Tarak", department: "IT", salary: 30000 },
    { id: 2, name: "Ram", department: "HR", salary: 25000 },
    { id: 3, name: "Tilak", department: "IT", salary: 45000 },
    { id: 4, name: "Gupta", department: "Finance", salary: 35000 },
    { id: 5, name: "Nada", department: "HR", salary: 28000 }
];

// Display employee list using map()
function displayEmployees(employeeList) {
    if (employeeList.length === 0) {
        document.getElementById("output").innerHTML =
            "<p>No employees found.</p>";
        return;
    }

    document.getElementById("output").innerHTML = `
        <h3>Employee Details</h3>
        ${employeeList.map(({ id, name, department, salary }) => `
            <p>
                ID: ${id} |
                Name: ${name} |
                Department: ${department} |
                Salary: ₹${salary}
            </p>
        `).join("")}
    `;
}

// 1. Display all employees
function showAllEmployees() {
    displayEmployees(employees);
}

// 2. Filter IT employees
function showITEmployees() {
    const itEmployees = employees.filter(
        employee => employee.department === "IT"
    );

    displayEmployees(itEmployees);
}

// 3. Calculate total salary using reduce()
function showTotalSalary() {
    const totalSalary = employees.reduce(
        (total, employee) => total + employee.salary,
        0
    );

    document.getElementById("output").innerHTML = `
        <h3>Total Salary Report</h3>
        <p>Total Employees: ${employees.length}</p>
        <p>Total Salary: ₹${totalSalary}</p>
    `;
}

// 4. Find highest-paid employee
function showHighestPaid() {
    const highestPaid = employees.reduce((highest, employee) =>
        employee.salary > highest.salary ? employee : highest
    );

    document.getElementById("output").innerHTML = `
        <h3>Highest Paid Employee</h3>
        <p>Name: ${highestPaid.name}</p>
        <p>Department: ${highestPaid.department}</p>
        <p>Salary: ₹${highestPaid.salary}</p>
    `;
}

// 5. Sort employees by salary (highest first)
function showSortedEmployees() {
    const sortedEmployees = [...employees].sort(
        (a, b) => b.salary - a.salary
    );

    displayEmployees(sortedEmployees);
}

// 6. Find an employee by ID using find()
function findEmployee(id) {
    return employees.find(employee => employee.id === id);
}

// Example of find()
const employee = findEmployee(3);
