// Passing One Argument
function greet(name) {
    console.log("Welcome " + name);
}

greet("Gupta");

// Passing Multiple Arguments

function add(a, b) {
    console.log("Sum:", a + b);
}

add(10, 20);

// Default Parameter

function User(name = "Guest") {
    console.log("Hello " + name);
}

User();          // default value
User("Rahul");   // passed value

// Multiple Default Parameters

function employee(name = "Unknown", role = "Trainee") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employee();
employee("Gupta", "Developer");


// E-Commerce Order

function placeOrder(product, quantity = 1) {
    console.log(
        "Ordered " + quantity + " " + product
    );
}

placeOrder("Laptop");
placeOrder("Mobile", 3);