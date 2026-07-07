// Passing a funtion (callback)
function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Tarak", greet));

// Returning a function from another function
function Greeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = Greeting("Hello");
const sayHi = Greeting("Hi");

console.log(sayHello("Tilak"));
console.log(sayHi("Ram"));      