let Paymentdone = true;

let OrderStatus = Paymentdone ? "OrderConfirmed" : "Order Not Placed";
console.log(OrderStatus);


let FoodDelivered = true;

let Status =  FoodDelivered ? "Successfully Delivered" : "Food is not Delivered"
console.log(Status)

// Student Pass/Fail
let marks = 80;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

// Discount
let purchaseAmount = 1500;

let discount = purchaseAmount >= 1999 ? "10% Discount" : "No Discount";

console.log(discount);


// Compare if else and ternary operator
// using if else
let marks1 = 40;

if (marks1 >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// using ternary
let marks2 = 40;

console.log(marks2 >= 35 ? "Pass" : "Fail");
