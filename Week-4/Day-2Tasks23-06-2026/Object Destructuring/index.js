//Basic Object Destructuring
const employee = {
    id: 101,
    name: "Gupta",
    department: "Frontend"
};

const { id, name, department } = employee;

console.log(id);
console.log(name);
console.log(department);

//Rename Variables
const student = {
    name: "Tarak",
    marks: 90
};

const { name: studentName, marks: score } = student;

console.log(studentName);
console.log(score);

//Default Values
const user = {
    name1: "Gupta"
};

const { name1, city = "Hyderabad" } = user;

console.log(name1);
console.log(city);

//Rest Operator with Objects
const person = {
    name2: "Gupta",
    age: 23,
    city: "Hyderabad",
    role: "Developer"
};

const { name2, ...details } = person;

console.log(name2);
console.log(details);

