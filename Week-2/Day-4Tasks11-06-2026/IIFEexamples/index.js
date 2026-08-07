// Basic Function
(function (){
    console.log("Welcome javascript IIFE")
})
();

// with Variables
(function(){
    let message = "Variable message exists only inside the IIFE and cannot be accessed Outside"
    console.log(message)
})
();

// with Parameters
(function(Definition){
    console.log(Definition)
})
("Values can be passed as arguments while invoking the IIFE");

// Private Scope
let count = 10;
(function(){
    let count = 20
    console.log("Inside:", count)
})()
console.log("Outside:", count)
console.log("\nIIFE creates its own scope, so the inner count does not affect the outer one");

// Initialization
console.log("\nUseful for running setup code when the script loads");

// Arrow function
console.log("\nIIFE can also be written using Arrow functions.");

// Calculate Bill
(function(price, quantity){
    let total = price*quantity;
    console.log("Total Bill:", total)
})
(500, 3);
console.log("\nThe calculation is performed immediately without creating reusable global functions.");

//Student Result
(function(marks){
    let result = marks>= 35 ? "Pass" : "Fail";
    console.log("Result:", result)
})
(80);
console.log("\nChecks the result instantly when the function is created");

// Product discount
(function(price, discount){
    let finalPrice = price -(price*discount/100)
    console.log("Final Price:", finalPrice)
})
(1000, 50);