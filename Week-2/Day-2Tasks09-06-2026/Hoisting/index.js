console.log("Function Declaration Hoisting");

greet();

function greet() {
  console.log("Hello!");
}

console.log("\nvar Hoisting");

console.log(x); // undefined
var x = 10;
console.log(x); // 10

console.log("\nlet Hoisting");

try {
  console.log(y);
} catch (err) {
  console.log(err.name + ": " + err.message);
}
let y = 20;

console.log("\nconst Hoisting");

try {
  console.log(z);
} catch (err) {
  console.log(err.name + ": " + err.message);
}
const z = 30;

console.log("\nFunction Expression with var");

try {
  sayHi();
} catch (err) {
  console.log(err.name + ": " + err.message);
}

var sayHi = function () {
  console.log("Hi");
};

sayHi();

console.log("\nFunction Expression with let");

try {
  sayHello();
} catch (err) {
  console.log(err.name + ": " + err.message);
}

let sayHello = function () {
  console.log("Hello");
};

sayHello();

console.log("\nLocal var Hoisting");

var num = 1;

function test() {
  console.log(num); // undefined
  var num = 2;
  console.log(num); // 2
}

test();

console.log("\nFunction and Variable Conflict");

function demo1() {
  console.log("I am function");
}

var demo1 = "I am variable";

console.log(demo1);

