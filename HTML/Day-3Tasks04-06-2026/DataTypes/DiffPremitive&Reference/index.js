// Primitive Data Type
let age1 = 22;
let age2 = age1;

age2 = 25;

console.log("Primitive Example");
console.log("age1 =", age1);
console.log("age2 =", age2);

// Reference Data Type
let student1 = {
    name: "Gupta",
    course: "JavaScript"
};

let student2 = student1;

student2.name = "Kumar";

console.log("\nReference Example");
console.log(student1);
console.log(student2);

// Comparison
let num1 = 10;
let num2 = 10;

console.log("\nPrimitive Comparison:");
console.log(num1 === num2);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log("\nReference Comparison:");
console.log(arr1 === arr2);