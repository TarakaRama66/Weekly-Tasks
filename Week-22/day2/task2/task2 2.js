 // Higher-Order Function
function operation(operator) {
    return function(a, b) {
        return operator(a, b);
    };
}

// Callback functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Pass functions as arguments
const addNumbers = operation(add);
const subtractNumbers = operation(subtract);
const multiplyNumbers = operation(multiply);
const divideNumbers = operation(divide);

// Display output in UI
document.getElementById("output").innerHTML = `
    <p>Addition (20 + 10): ${addNumbers(20, 10)}</p>
    <p>Subtraction (20 - 10): ${subtractNumbers(20, 10)}</p>
    <p>Multiplication (20 * 10): ${multiplyNumbers(20, 10)}</p>
    <p>Division (20 / 10): ${divideNumbers(20, 10)}</p>
`;
