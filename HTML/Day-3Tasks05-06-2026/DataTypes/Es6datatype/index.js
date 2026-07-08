let name = "Gupta";          // String
let age = 22;               // Number
let isStudent = true;       // Boolean
let city;                   // Undefined
let address = null;         // Null
let id = Symbol("ID");      // Symbol

const student = {
    name,
    age
};

const skills = ["HTML", "CSS", "JavaScript"];

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof address);
console.log(typeof id);

console.log(student);
console.log(skills);

console.log(`Welcome ${name}`);