// Creating an array of product objects
const products = [
  {
    id: 101,
    name: "Laptop",
    price: 75000,
    stock: 10,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Mobile",
    price: 40000,
    stock: 20,
    category: "Electronics"
  },
  {
    id: 103,
    name: "Headphones",
    price: 1500,
    stock: 0,
    category: "Accessories"
  },
  {
    id: 104,
    name: "Smart Watch",
    price: 3500,
    stock: 15,
    category: "Accessories"
  }
];

// Accessing entire array
console.log("All Products:");
console.log(products);

// Accessing first product
console.log("\nFirst Product:");
console.log(products[0]);

// Accessing specific properties
console.log("\nFirst Product Name:");
console.log(products[2].name);

console.log("\nSecond Product Price:");
console.log(products[1].price);

// Accessing last product
console.log("\nLast Product:");
console.log(products[products.length - 1]);

// Accessing last product name
console.log("\nLast Product Name:");
console.log(products[products.length - 1].name);

// Using loop to access all elements
console.log("\nAll Product Details:");

for(let i = 0; i < products.length; i++) {
  console.log(
    `ID: ${products[i].id},
     Name: ${products[i].name},
     Price: ₹${products[i].price},
     Stock: ${products[i].stock},
     Category: ${products[i].category}`
  );
}
// Calculating total value
let totalInventoryValue = 0;

for(let i = 0; i < products.length; i++) {
  totalInventoryValue += products[i].price * products[i].stock;
}

console.log("\nTotal Inventory Value:");
console.log(`₹${totalInventoryValue}`);

// Finding expensive products
console.log("\nProducts Above ₹10,000:");

for(let i = 0; i < products.length; i++) {
  if(products[i].price > 10000) {
    console.log(products[i].name);
  }
}
// Checking stock availability
console.log("\nStock Status:");

for(let i = 0; i < products.length; i++) {
  console.log(
    `${products[i].name} -> ${products[i].stock > 0 ? "Available" : "Out of Stock"}`
  );
}