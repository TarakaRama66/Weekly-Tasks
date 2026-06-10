// Global Scope A variable declared outside any function or block can be accessed from anywhere 
// in the program.
console.log("\n Global Scope");
let companyName = "OpenAI"; // Global Scope

function showCompany() {
    console.log("Inside Function:", companyName);
}

console.log("Outside Function:", companyName);

showCompany();
// companyName is declared globally.
// It can be accessed both inside and outside the function.

// Function Scope A variable declared inside a function can only be accessed within that function.
console.log("\n Function Scope");
function greetUser() {
    let message = "Welcome to JavaScript"; // Function Scope

    console.log("Inside Function:", message);
}

greetUser();

// console.log(message); // Error
// message exists only inside greetUser().
// Accessing it outside the function causes an error.

console.log("\n Block Scope");
// Variables declared using let or const inside a block {} are accessible only within that block.
if (true) {
    let city = "Hyderabad";
    const state = "Telangana";

    console.log("Inside Block:", city);
    console.log("Inside Block:", state);
}

// console.log(city);   // Error
// console.log(state);  // Error
// city and state are block-scoped variables.
// They cannot be accessed outside the if block.


function test(){
    let age= 23;
    console.log(age);
}
test()
