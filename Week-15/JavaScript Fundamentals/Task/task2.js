// Variables
var storeName = "Mega Mart";
 
let customerName = "Gupta";
let productName = "Wireless Headphones";
let productPrice = 2500;
let quantity = 2;
 
const discountPercentage = 10;
 
// Primitive Data Types
let isPremiumMember = true;
let deliveryCharge = 100;
 
// Reference Data Type (Object)
let customer = {
  id: 101,
  city: "Hyderabad"
};
 
// Arithmetic Operators
let totalPrice = productPrice * quantity;
 
// Discount Calculation
let discount = (totalPrice * discountPercentage) / 100;
 
// Assignment Operator
totalPrice -= discount;
 
// Premium members get free delivery
if (isPremiumMember) {
  deliveryCharge = 0;
}
 
let finalAmount = totalPrice + deliveryCharge;
 
// Comparison Operators
let eligibleForFreeGift = finalAmount > 3000;
let isExpensive = productPrice >= 2000;
 
// Logical Operators
let specialOffer =
  isPremiumMember && eligibleForFreeGift;
 
// Type Conversion
let walletBalance = "10000";
walletBalance = Number(walletBalance);
console.log("\nShopping Cart");
console.log(walletBalance - finalAmount);
 
// Type Coercion
console.log("Final Amount: ₹" + finalAmount);
 
// typeof Operator
console.log(typeof customerName);
console.log(typeof productPrice);
console.log(typeof isPremiumMember);
console.log(typeof customer);
 
// Template Literals
// order summary
console.log(`Store Name: ${storeName}
Customer Name: ${customerName}
Customer ID: ${customer.id}
City: ${customer.city}
 
Product: ${productName}
Price: ₹${productPrice}
Quantity: ${quantity}
 
Total Price: ₹${productPrice * quantity}
Discount: ₹${discount}
Delivery Charge: ₹${deliveryCharge}
 
Final Amount: ₹${finalAmount}
 
Premium Member: ${isPremiumMember}
Eligible For Free Gift: ${eligibleForFreeGift}
Special Offer Available: ${specialOffer}
`);