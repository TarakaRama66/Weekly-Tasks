function calculate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

// Passing functions as callbacks
const result1 = calculate(10, 5, add);
const result2 = calculate(10, 5, multiply);
const result3 = calculate(10, 5, subtract);
const result4 = calculate(10, 5, divide);

// Display results in UI
document.getElementById("output").innerHTML = `
    <p>Addition: ${result1}</p>
    <p>Multiplication: ${result2}</p>
    <p>Subtraction: ${result3}</p>
    <p>Division: ${result4}</p>
`;
