
const numbers = [10, 20, 30, 40, 50, 60];

const output = document.getElementById("output");

// 1. Display all numbers
function displayNumbers() {
    output.innerHTML = `
        <h3>Original Numbers</h3>
        <p>${numbers.join(", ")}</p>
    `;
}

// 2. Pure function to filter even numbers
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function displayEvenNumbers() {
    const result = getEvenNumbers(numbers);

    output.innerHTML = `
        <h3>Even Numbers</h3>
        <p>${result.join(", ")}</p>
    `;
}

// 3. Pure function to double numbers
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

function displayDoubledNumbers() {
    const result = doubleNumbers(numbers);

    output.innerHTML = `
        <h3>Doubled Numbers</h3>
        <p>${result.join(", ")}</p>
    `;
}

// 4. Pure function to calculate total
function calculateTotal(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function displayTotal() {
    const total = calculateTotal(numbers);

    output.innerHTML = `
        <h3>Total</h3>
        <p>${total}</p>
    `;
}

// 5. Function composition
function addFive(num) {
    return num + 5;
}

function multiplyByTwo(num) {
    return num * 2;
}

function compose(firstFunction, secondFunction) {
    return function(value) {
        return secondFunction(firstFunction(value));
    };
}

function displayComposition() {
    const result = compose(addFive, multiplyByTwo)(10);

    output.innerHTML = `
        <h3>Function Composition</h3>
        <p>Original Value: 10</p>
        <p>Add 5, then multiply by 2</p>
        <p>Result: ${result}</p>
    `;
}
