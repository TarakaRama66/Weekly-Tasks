//Modern Javascript
console.log("\n Modern JavaScript");
// Destructuring
let person = {
  fullName: "Mahesh",
  age: 24,
  city: "Hyderabad"
};
let { fullName, age } = person;
console.log(fullName);
console.log(age);
// Array Destructuring
let colors = ["Red", "Green", "Blue"];
let [firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);
// Spread Operator
let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Mango"];
let allFruits = [...fruits1, ...fruits2];
console.log(allFruits);
// Rest Operator
function calculateTotal(...values) {
  return values.reduce((sum, value) => sum + value, 0);
}
console.log(calculateTotal(10, 20, 30, 40));
// Optional Chaining
let student = {
  name: "Dileep",
  address: {
    city: "Hyderabad"
  }
};
console.log(student.address?.city);
console.log(student.contact?.phone);
// Nullish Coalescing
let discount = null;
let finalDiscount = discount ?? 10;
console.log(finalDiscount); // 10