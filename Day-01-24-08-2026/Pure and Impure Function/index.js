// Pure Function

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(100, 4));
console.log(calculateTotal(100, 5));
// pure function always gives the same output for the same input and doesn't change anything outside

// Impure Function
let total = 0;

function addToTotal(amount) {
  total = total + amount;
  return total;
}

console.log(addToTotal(100));
console.log(addToTotal(100));
console.log(addToTotal(100));
// impure function can change or depend on external data