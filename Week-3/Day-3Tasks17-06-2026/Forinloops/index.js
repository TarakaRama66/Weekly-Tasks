// Print All Properties
let person = {
    name: "Gupta",
    age: 23,
    city: "Hyderabad"
};

for (let key in person) {
    console.log(key);
}

// Print Keys and Values
let person1 = {
    name: "Gupta",
    age: 23,
    city: "Hyderabad"
};

for (let key in person1) {
    console.log(key + " : " + person1[key]);
}

// Student Object
let student = {
    id: 101,
    name: "Ram",
    course: "JavaScript"
};

for (let property in student) {
    console.log(property, student[property]);
}

// Count Properties
let employee = {
    name: "John",
    salary: 50000,
    department: "IT"
};

let count = 0;

for (let key in employee) {
    count++;
}

console.log("Total Properties:", count);

// Sum object Values
let marks = {
    math: 90,
    science: 85,
    english: 80
};

let total = 0;

for (let subject in marks) {
    total += marks[subject];
}

console.log("Total Marks:", total);