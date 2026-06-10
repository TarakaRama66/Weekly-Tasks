// Arguments Object Example

function employeeDetails() {
    console.log("Arguments Object:");
    console.log(arguments);
}

employeeDetails("Gupta", 25, "Developer");


// Arguments Object - Sum

function sumUsingArguments() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Sum using Arguments:", sum);
}
sumUsingArguments(10, 20, 30);


// Rest Parameters Example

function showProducts(...products) {
    console.log("Products:", products);
}
showProducts("Laptop", "Mobile", "Watch");


// Rest Parameters - Sum

function sumUsingRest(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    console.log("Sum using Rest:", sum);
}
sumUsingRest(10, 20, 30, 40);


// Shopping Cart

function addToCart(...items) {
    console.log("Cart Items:");
    for (let item of items) {
        console.log(item);
    }
}
addToCart("Laptop", "Mouse", "Keyboard");