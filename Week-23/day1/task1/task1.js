// Global Execution Context
var a = 10;
var b = 20;
console.log("Global Execution Context");
console.log("Value of a:", a);
console.log("Value of b:", b);
// Function Execution Context
function addition() {
    console.log("Function Execution Context");
    var result = a + b;
    document.getElementById("output").innerHTML =
        "Addition Result: " + result;
    console.log("Addition Result:", result);
    return result;
}
// Code Execution
console.log("JavaScript Code Execution Started");
var answer = addition();
console.log("Final Answer:", answer);