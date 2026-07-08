// Object
let employee = {
    id: 101,
    name: "Gupta",
    department: "IT"
};
displayEmployee(employee);
// Array
let technologies = ["HTML", "CSS", "JavaScript"];
console.log("Technologies:", technologies);

// Function
function displayEmployee(emp) {
    console.log("Employee ID:", emp.id);
    console.log("Employee Name:", emp.name);
    console.log("Department:", emp.department);
}
function add(a, b) {
    return a + b;
}

console.log("Sum:", add(10, 20));


// Datatype Checking
console.log(typeof employee);
console.log(typeof technologies);
console.log(typeof displayEmployee);