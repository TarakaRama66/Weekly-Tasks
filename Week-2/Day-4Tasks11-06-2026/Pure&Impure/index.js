// A pure function always produces the same output for the same input and has no side effects.

// An impure function may depend on external state, modify something outside itself, or produce side effects.
// Calculating a discount
// Pure
function calDiscount(price, percentage) {
  return price - (price * percentage) / 100;
}

console.log(calDiscount(1000, 10));
console.log(calDiscount(2000, 10)); 

// ImpureFunction
let discountPercentage = 10;

function calculateDiscount(price) {
  return price - (price * discountPercentage) / 100;
}

console.log(calculateDiscount(1000));

discountPercentage = 10;

console.log(calculateDiscount(2000));

// Current Time
// pure
function timeFormat(time){
    return time.toUpperCase()
}
console.log(timeFormat("02:00 PM"))

//Impure
function getCurrenttime(){
    return new Date();
}
console.log(getCurrenttime())