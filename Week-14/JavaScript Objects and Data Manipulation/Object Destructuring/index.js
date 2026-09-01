const order = {
  orderId: 5001,
  customerName: "Gupta",
  totalAmount: 75000,

  shippingAddress: {
    city: "Hyderabad",
    state: "Telangana",
    pincode: 500001
  },

  products: [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
  ],

  payment: {
    method: "UPI",
    status: "Success"
  }
};

// Destructuring
const {
  orderId,
  customerName: customer,      // Renaming
  totalAmount,
  discount = 10,               // Default Value

  shippingAddress: {
    city,
    state,
    pincode
  },

  products: [product1, product2, ...remainingProducts],

  payment: {
    method,
    status
  },

  ...otherDetails
} = order;

console.log("Order ID:", orderId);
console.log("Customer:", customer);
console.log("Amount:", totalAmount);
console.log("Discount:", discount + "%");

console.log("\nAddress:");
console.log(city);
console.log(state);
console.log(pincode);

console.log("\nProducts:");
console.log(product1);
console.log(product2);
console.log(remainingProducts);

console.log("\nPayment:");
console.log(method);
console.log(status);

console.log("\nOther Details:");
console.log(otherDetails);