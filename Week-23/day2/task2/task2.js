// Original employee object
let employee = {
    id: 101,
    name: "Rahul",
    department: "Frontend",
    salary: 30000
};
// Display original object
function originalObject() {
    document.getElementById("output").textContent =
        "Original Employee Object:\n" +
        JSON.stringify(employee, null, 2);
}
// Object.assign() cloning
function assignClone() {
    let clonedEmployee = Object.assign({}, employee);
    clonedEmployee.name = "Kiran";
    clonedEmployee.salary = 40000;
    document.getElementById("output").textContent =
        "Object.assign() Cloning\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCloned Object:\n" +
        JSON.stringify(clonedEmployee, null, 2);
}
// Spread operator cloning
function spreadClone() {
    let clonedEmployee = { ...employee };
    clonedEmployee.name = "Arjun";
    clonedEmployee.department = "Backend";
    document.getElementById("output").textContent =
        "Spread Operator Cloning\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCloned Object:\n" +
        JSON.stringify(clonedEmployee, null, 2);
}
// structuredClone()
function structuredCloneExample() {
    let clonedEmployee = structuredClone(employee);
    clonedEmployee.name = "Priya";
    clonedEmployee.salary = 50000;
    document.getElementById("output").textContent =
        "Structured Clone\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCloned Object:\n" +
        JSON.stringify(clonedEmployee, null, 2);
}
// JSON cloning
function jsonClone() {
    let clonedEmployee = JSON.parse(
        JSON.stringify(employee)
    );
    clonedEmployee.name = "Sneha";
    clonedEmployee.salary = 60000;
    document.getElementById("output").textContent =
        "JSON Cloning\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCloned Object:\n" +
        JSON.stringify(clonedEmployee, null, 2);
}