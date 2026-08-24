function greetUser(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function Callback() {
  console.log("This is Callback Function Example");
}

greetUser("Tarak", Callback);

// Using Arrow function
function greetUser1(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greetUser1("Gupta", () => {
  console.log("Have a great day!");
});

// callback is a function passed to another function as an argument and executed later.