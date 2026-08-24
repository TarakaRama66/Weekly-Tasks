function double(number) {
  return number * 2;
}
function add(number) {
  return number + 10;
}
function square(number) {
  return number * number;
}
const result = square(add(double(5)));
console.log(result);


// Another Way
function compose(f, g) {
  return function (value) {
    return f(g(value));
  };
}
function double1(number) {
  return number * 2;
}
function add1(number) {
  return number + 10;
}
const calculate = compose(add1, double1);
console.log(calculate(5));

// combining small functions to create a bigger operation