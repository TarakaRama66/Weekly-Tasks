function placeOrder(){
    console.log("\n*CallStack Example")
    console.log("Order Placed");
    processPayment();
}
function processPayment(){
    console.log("Payment Successful");
    assignDeliveryPartner();
}
function assignDeliveryPartner(){
    console.log("Delivery Partner Receive the Order");
}
placeOrder();

// A mechanism used by js to track function execution
// principle is LIFO(Last In, First Out)

// WebApi
// WebApis are provided by the browser,not javascript
// They handle asynchronous operations like settimeout,interval,fetch,dom
console.log("\n*WebApi Example")
console.log("Order Placed");
setTimeout(()=>{
    console.log("Order Conformed");
},4000);
console.log("Order Details");
