// Array Destructuring
// Basic Array Destructuring
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

// Skip elements
const numbers = [10, 20, 30, 40, 50];

const [first1, , third1] = numbers;

console.log(first1);
console.log(third1);

// Swap Variables
let a = 100;
let b = 200;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Rest Operator with Arrays
const fruits = ["Apple", "Mango", "Orange", "Banana"];

const [firstFruit, ...remainingFruits] = fruits;

console.log(firstFruit);
console.log(remainingFruits);