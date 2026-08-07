// Without Parameters
function CompanyName() {
    console.log("NYB Infotech");
}
CompanyName();


// One Parameter

function greetUser(name) {
    console.log("Welcome " + name);
}
greetUser("Gupta");

// Multiple Parameters

function addNumbers(num1, num2) {
    console.log("Sum:", num1 + num2);
}
addNumbers(10, 20);


// Employee Details with&without parameters

function employeeDetails(name, role) {
    console.log("Employee Name:", name);
    console.log("Role:", role);
}

employeeDetails("Gupta", "Developer");