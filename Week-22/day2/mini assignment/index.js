const employees = [
    { id: 101, name: "Tarak", department: "IT", salary: 30000 },
    { id: 102, name: "Hari", department: "HR", salary: 25000 },
    { id: 103, name: "Arun", department: "IT", salary: 45000 },
    { id: 104, name: "Sruthi", department: "Finance", salary: 35000 },
    { id: 105, name: "Kumar", department: "HR", salary: 28000 },
    { id: 106, name: "kavya", department: "Finance", salary: 40000 }
];

// 1. Display employees using destructuring
function displayEmployees(employeeList) {
    const output = document.getElementById("employeeList");

    if (employeeList.length === 0) {
        output.innerHTML = "<p>No employees found.</p>";
        return;
    }

    output.innerHTML = employeeList.map(
        ({ id, name, department, salary }) => `
            <div>
                <hr>
                <p>ID: ${id}</p>
                <p>Name: ${name}</p>
                <p>Department: ${department}</p>
                <p>Salary: ₹${salary.toLocaleString("en-IN")}</p>
            </div>
        `
    ).join("");
}

// 2. Filter employees by department
function filterEmployees() {
    const department = document.getElementById("department").value;

    const filteredEmployees = department === "All"
        ? employees
        : employees.filter(
            employee => employee.department === department
        );

    displayEmployees(filteredEmployees);
}

// 3. Find employee by ID
function searchEmployee() {
    const id = Number(document.getElementById("employeeId").value);

    if (!id) {
        document.getElementById("employeeList").innerHTML =
            "<p>Please enter a valid employee ID.</p>";
        return;
    }

    const employee = employees.find(employee => employee.id === id);

    displayEmployees(employee ? [employee] : []);
}

// 4. Sort employees by salary using spread
function sortSalary(order) {
    const sortedEmployees = [...employees].sort((a, b) => {
        return order === "asc"
            ? a.salary - b.salary
            : b.salary - a.salary;
    });

    displayEmployees(sortedEmployees);
}

// 5. Calculate total salary using reduce
function calculateTotalSalary() {
    return employees.reduce(
        (total, { salary }) => total + salary,
        0
    );
}

// 6. Calculate average salary using reduce
function calculateAverageSalary() {
    if (employees.length === 0) {
        return 0;
    }

    return calculateTotalSalary() / employees.length;
}

// 7. Find highest-paid employee
function getHighestPaidEmployee() {
    if (employees.length === 0) {
        return null;
    }

    return employees.reduce((highest, current) =>
        current.salary > highest.salary ? current : highest
    );
}

// 8. Find lowest-paid employee
function getLowestPaidEmployee() {
    if (employees.length === 0) {
        return null;
    }

    return employees.reduce((lowest, current) =>
        current.salary < lowest.salary ? current : lowest
    );
}

// 9. Display salary statistics
function showStatistics() {
    const total = calculateTotalSalary();
    const average = calculateAverageSalary();
    const highest = getHighestPaidEmployee();
    const lowest = getLowestPaidEmployee();

    document.getElementById("statistics").innerHTML = `
        <hr>
        <p>Total Employees: ${employees.length}</p>
        <p>Total Salary: ₹${total.toLocaleString("en-IN")}</p>
        <p>Average Salary: ₹${average.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        })}</p>
        <p>Highest Paid: ${
            highest
                ? `${highest.name} - ₹${highest.salary.toLocaleString("en-IN")}`
                : "No employees"
        }</p>
        <p>Lowest Paid: ${
            lowest
                ? `${lowest.name} - ₹${lowest.salary.toLocaleString("en-IN")}`
                : "No employees"
        }</p>
    `;
}

// Display all employees when the page loads
displayEmployees(employees);
