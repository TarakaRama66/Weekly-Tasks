// Creating an employee object
let employee = {
    id: 101,
    name: "Tarak",
    department: "Frontend",
    salary: 30000
};
// Display object properties
function displayEmployee() {
    document.getElementById("output").innerHTML =
        `<h3>Employee Details</h3>
         ID: ${employee.id}<br>
         Name: ${employee.name}<br>
         Department: ${employee.department}<br>
         Salary: ${employee.salary}`;
}
//Update object properties
function updateEmployee() {
    employee.name = "Kiran";
    employee.salary = 40000;
    document.getElementById("output").innerHTML =
        "Employee details updated successfully!<br>" +
        "Name: " + employee.name + "<br>" +
        "Salary: " + employee.salary;
}
//Add new property dynamically
function addProperty() {
    employee.location = "Hyderabad";
    document.getElementById("output").innerHTML =
        "New property added!<br>" +
        "Location: " + employee.location;
}
// Delete object property
function deleteProperty() {
    delete employee.department;
    document.getElementById("output").innerHTML =
        "Department property deleted!<br>" +
        "Employee: " + JSON.stringify(employee);
}
// Object reference behaviour
function checkReference() {
    let anotherEmployee = employee;
    anotherEmployee.name = "Arjun";
    document.getElementById("output").innerHTML =
        "<h3>Object Reference Behaviour</h3>" +
        "Original Object Name: " + employee.name + "<br>" +
        "Copied Object Name: " + anotherEmployee.name + "<br><br>" +
        "Are both objects pointing to the same reference? " +
        (employee === anotherEmployee);
}