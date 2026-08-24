const greet = function () {
  console.log("Hello!");
};

greet();
// Stores function in a variable

// pass function as argument
function execute(callback) {
  callback();
}

function sayHello() {
  console.log("Hello, JavaScript!");
}

execute(sayHello);

// Return function
function createGreeting() {
  return function () {
    console.log("Welcome!");
  };
}

const greeting = createGreeting();

greeting();