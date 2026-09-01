const employee = {
  id: 101,
  name: "Gupta",
  age: 25
};

// Spread Operator
const updatedEmployee = {
  ...employee,
  city: "Hyderabad"
};

// Rest Operator
const { name, ...remainingDetails } = updatedEmployee;

console.log(updatedEmployee);
console.log(name);
console.log(remainingDetails);

const numbers = [10, 20, 30];

function sum(a, b, c) {
  return a + b + c;
}

// Spread in function call
console.log(sum(...numbers));

function displayNumbers(...nums) {
  console.log(nums);
}

// Rest in function parameter
displayNumbers(1, 2, 3, 4, 5);