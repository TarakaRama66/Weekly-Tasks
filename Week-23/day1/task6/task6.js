// Employee Object
const employee = {
    name: "Tarak",
    role: "Frontend Developer",
    company: "NYB Infotech"
};
// Common Function
function displayEmployee(city, salary) {
    return `
        Employee Name: ${this.name}<br>
        Role: ${this.role}<br>
        Company: ${this.company}<br>
        City: ${city}<br>
        Salary: ${salary}
    `;
}
// CALL METHOD
function callExample() {
    const result = displayEmployee.call(
        employee,
        "Hyderabad",
        30000
    );
    document.getElementById("output").innerHTML = result;
}
// APPLY METHOD
function applyExample() {
    const result = displayEmployee.apply(
        employee,
        ["Hyderabad", 30000]
    );
    document.getElementById("output").innerHTML = result;
}
// BIND METHOD
function bindExample() {
    const employeeDetails = displayEmployee.bind(
        employee,
        "Hyderabad",
        30000
    );
    document.getElementById("output").innerHTML =
        employeeDetails();
}