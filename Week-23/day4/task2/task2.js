
const products = [
    { id: 1, name: "Laptop", price: 55000, quantity: 2 },
    { id: 2, name: "Mouse", price: 800, quantity: 5 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 3 },
    { id: 4, name: "Monitor", price: 12000, quantity: 2 },
    { id: 5, name: "Headphones", price: 3000, quantity: 4 },
    { id: 6, name: "USB Cable", price: 300, quantity: 10 }
];

const output = document.getElementById("output");

// Display product names and prices using map()
function displayProducts() {

    const result = products.map(product => `
        <p>
            ID: ${product.id} <br>
            Name: ${product.name} <br>
            Price: ₹${product.price} <br>
            Quantity: ${product.quantity}
        </p>
        <hr>
    `);

    output.innerHTML = result.join("");
}

// Filter products below ₹5000
function filterProducts() {

    const result = products.filter(product =>
        product.price < 5000
    );

    displayResult(result);
}

// Calculate total product value using reduce()
function calculateTotal() {

    const total = products.reduce((sum, product) => {
        return sum + (product.price * product.quantity);
    }, 0);

    output.innerHTML = `
        <h3>Total Product Value: ₹${total}</h3>
    `;
}

// Find the most expensive product
function findExpensive() {

    const expensive = products.reduce((max, product) => {
        return product.price > max.price ? product : max;
    });

    output.innerHTML = `
        <h3>Most Expensive Product</h3>
        <p>Name: ${expensive.name}</p>
        <p>Price: ₹${expensive.price}</p>
    `;
}

// Calculate average product price
function calculateAverage() {

    const total = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    const average = total / products.length;

    output.innerHTML = `
        <h3>Average Product Price: ₹${average.toFixed(2)}</h3>
    `;
}

// Reusable display function
function displayResult(data) {

    output.innerHTML = data.map(product => `
        <p>
            Name: ${product.name} <br>
            Price: ₹${product.price} <br>
            Quantity: ${product.quantity}
        </p>
        <hr>
    `).join("");
}
