// Variables
let num1 = 20;
let num2 = 5;

console.log("\nArithmetic Operators");
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** 2);

console.log("\nAssignment Operators");
let value = 10;

console.log("Initial Value:", value);

value += 5;
console.log("After += :", value);

value -= 3;
console.log("After -= :", value);

value *= 2;
console.log("After *= :", value);

value /= 4;
console.log("After /= :", value);

console.log("\nComparison Operators");
let a = 10;
let b = "10";

console.log("a == b :", a == b);
console.log("a === b :", a === b);
console.log("a != b :", a != b);
console.log("a !== b :", a !== b);
console.log("a > 5 :", a > 5);
console.log("a < 5 :", a < 5);
console.log("a >= 10 :", a >= 10);
console.log("a <= 8 :", a <= 8);

console.log("\nLogical Operators");
let age = 22;
let hasID = true;

console.log("AND (&&):", age >= 18 && hasID);
console.log("OR (||):", age < 18 || hasID);
console.log("NOT (!):", !hasID);

console.log("\nIncrement & Decrement");
let count = 5;

console.log("Original:", count);

count++;
console.log("After Increment:", count);

count--;
console.log("After Decrement:", count);

console.log("\nTernary Operator");
let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result:", result);

console.log("\nString Concatenation");
let firstName = "Gupta";
let lastName = "Kandula";

let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

console.log("\nTypeof Operator");
console.log("Type of fullName:", typeof fullName);
console.log("Type of age:", typeof age);
console.log("Type of hasID:", typeof hasID);



