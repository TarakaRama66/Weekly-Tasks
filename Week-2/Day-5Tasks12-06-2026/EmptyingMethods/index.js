let cart = ["Laptop", "Mouse", "Keyboard", "Headphones"];

console.log("Before Checkout the Cart:");
console.log(cart);

// Customer completed purchase
cart.splice(0, cart.length);

console.log("\nAfter Checkout the Cart:");
console.log(cart);

// Verify cart is empty
console.log("\nItems Remaining:", cart.length);