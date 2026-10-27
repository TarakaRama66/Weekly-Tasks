 // 1. Function Declaration
function add(a, b) {
    return a + b;
}

// 2. Function Expression
const subtract = function(a, b) {
    return a - b;
};

// 3. Arrow Function
const multiply = (a, b) => a * b;

// 4. Anonymous Function
const divide = function(a, b) {
    return a / b;
};

// Display output in UI
document.getElementById("output").innerHTML = `
    <p>Addition (10 + 5): ${add(10, 5)}</p>
    <p>Subtraction (10 - 5): ${subtract(10, 5)}</p>
    <p>Multiplication (10 * 5): ${multiply(10, 5)}</p>
    <p>Division (10 / 5): ${divide(10, 5)}</p>
`;
