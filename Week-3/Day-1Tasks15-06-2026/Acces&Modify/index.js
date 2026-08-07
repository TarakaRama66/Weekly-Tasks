// Object Creation
let employee = {
    id: 101,
    name: "Gupta",
    role: "Developer",
    salary: 40000
};

// Access Properties
console.log("ID:", employee.id);
console.log("Name:", employee["name"]);
console.log("Role:", employee.role);
console.log("Salary:", employee.salary);

// Modify Existing Properties
employee.role = "Senior Developer";
employee.salary = 50000;

console.log("\nAfter Modification:");
console.log(employee);

// Add New Property
employee.department = "IT";

console.log("\nAfter Adding Department:");
console.log(employee);

// Delete Property
delete employee.id;

console.log("\nAfter Deleting ID:");
console.log(employee);