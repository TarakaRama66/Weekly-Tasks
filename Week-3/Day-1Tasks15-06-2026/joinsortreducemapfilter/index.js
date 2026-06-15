// Join() converts Array to string
let Languages = ["JavaScript", "Salesforce", "React", "HTML", "CSS"];

let result = Languages.join(" | ");

console.log(result);

//Sort() sort array elements
let scores = [58, 90, 29, 76, 87];

scores.sort((a, b) => a - b);

console.log(scores);

// Map() Transform Each element
let prices = [100, 200, 300, 400];

let gstPrices = prices.map(price => price + (price * 0.15));

console.log(gstPrices);

// filter() Select Elements Based on Condition
let ages = [15, 22, 17, 30, 19, 12];

let adults = ages.filter(age => age >= 18);

console.log(adults);

// Reduce() reduce array to single value
let expenses = [1200, 800, 500, 1500];

let totalExpense = expenses.reduce((total, expense) => total + expense, 0);

console.log(totalExpense);