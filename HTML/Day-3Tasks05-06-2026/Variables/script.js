// var variable
var studentName = "Gupta";

// let variable
let age = 22;

// const variable
const country = "India";

// Different data types
var course = "JavaScript";   // String
let marks = 85;              // Number
const isPassed = true;       // Boolean

console.log("Student Name: " + studentName);
console.log("Age: " + age);
console.log("Country: " + country);
console.log("Course: " + course);
console.log("Marks: " + marks);
console.log("Passed: " + isPassed);

// Updating var and let variables
studentName = "Tarak";
age = 23;

console.log("\nAfter Updating Values:");
console.log("Student Name: " + studentName);
console.log("Age: " + age);

// Variable Scope Example
function studentDetails() {
    let section = "A";
    console.log("Section: " + section);
}

studentDetails();