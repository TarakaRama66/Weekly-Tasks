function calculate(a, b, operation) {
  return operation(a, b);
}
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
console.log(calculate(10, 5, add));      
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));

// A higher-order function HOF is a function that either:

// Takes another function as an argument, or
// Returns another function