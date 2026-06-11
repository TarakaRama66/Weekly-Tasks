"use strict";
const person = {
  name: "Tarak",

// Regular method
regularMethod() {
console.log("Regular Method:", this.name);

// Nested regular function
function nestedRegular() {
    console.log("Nested Regular Function:", this?.name);
}

// Nested arrow function
const nestedArrow = () => {
    console.log("Nested Arrow Function:", this.name);
};

nestedRegular();
nestedArrow();
},

// Arrow method
arrowMethod: () => {
console.log("Arrow Method:", this?.name);
},

// Returns a regular function
getRegularFunction() {
return function () {
    console.log("Returned Regular Function:", this?.name);
};
},

// Returns an arrow function
getArrowFunction() {
    return () => {
    console.log("Returned Arrow Function:", this.name);
};
},

// setTimeout examples
timeoutExample() {
    setTimeout(function () {
    console.log("setTimeout Regular:", this?.name);
}, 1000);

    setTimeout(() => {
    console.log("setTimeout Arrow:", this.name);
}, 1000);
}};

// Constructor function
function User(name) {
  this.name = name;

  this.show = function () {
    console.log("Constructor Function:", this.name);
  };
}

const user = new User("Charlie");
user.show();
// Method calls
person.regularMethod();
person.arrowMethod();

// Returned functions
const regularFn = person.getRegularFunction();
const arrowFn = person.getArrowFunction();

regularFn();
arrowFn();

// Using call()
regularFn.call({ name: "Bob" });

// Timeout examples
person.timeoutExample();
