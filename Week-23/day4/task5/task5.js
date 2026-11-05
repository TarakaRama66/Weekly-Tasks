
const numbers = [10, 15, 20, 25, 30, 35, 40];

const employees = [
    { id: 1, name: "Rahul", salary: 30000 },
    { id: 2, name: "Priya", salary: 45000 },
    { id: 3, name: "Kiran", salary: 25000 },
    { id: 4, name: "Sneha", salary: 50000 }
];

const output = document.getElementById("output");

// 1. Display numbers
function displayNumbers() {
    output.innerHTML = `
        <h3>Original Numbers</h3>
        <p>${numbers.join(", ")}</p>
    `;
}

// 2. Higher-order function
// Accepts another function as an argument
function processArray(arr, callback) {
    return arr.filter(callback);
}

function filterEvenNumbers() {
    const result = processArray(numbers, num => num % 2 === 0);

    output.innerHTML = `
        <h3>Even Numbers</h3>
        <p>${result.join(", ")}</p>
    `;
}

// 3. Higher-order function using map
function transformArray(arr, callback) {
    return arr.map(callback);
}

function displayDoubledNumbers() {
    const result = transformArray(numbers, num => num * 2);

    output.innerHTML = `
        <h3>Doubled Numbers</h3>
        <p>${result.join(", ")}</p>
    `;
}

// 4. Higher-order function using reduce
function calculateArray(arr, callback, initialValue) {
    return arr.reduce(callback, initialValue);
}

function calculateTotal() {
    const total = calculateArray(
        numbers,
        (sum, num) => sum + num,
        0
    );

    output.innerHTML = `
        <h3>Total</h3>
        <p>${total}</p>
    `;
}

// 5. Function returning another function
function createDiscount(discountPercentage) {
    return function(price) {
        return price - (price * discountPercentage / 100);
    };
}

function displayDiscount() {
    const applyDiscount = createDiscount(10);

    const originalPrice = 5000;
    const finalPrice = applyDiscount(originalPrice);

    output.innerHTML = `
        <h3>Discount Calculation</h3>
        <p>Original Price: ₹${originalPrice}</p>
        <p>Discount: 10%</p>
        <p>Final Price: ₹${finalPrice}</p>
    `;
}

// 6. Reusable validation function
function validateEmployees(arr, callback) {
    return arr.filter(callback);
}

function displayValidation() {
    const result = validateEmployees(
        employees,
        employee => employee.salary >= 30000
    );

    output.innerHTML = `
        <h3>Employees with Salary ₹30,000 or Above</h3>
        ${result.map(employee => `
            <p>
                Name: ${employee.name}<br>
                Salary: ₹${employee.salary}
            </p>
            <hr>
        `).join("")}
    `;
}
