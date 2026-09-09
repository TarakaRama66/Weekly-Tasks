// Arrays
console.log("\n Arrays");
// Creating and Accessing Arrays
let members = ["Tarak", "Siddu", "Venu", "Koushik"];
console.log(members);
console.log(members[0]); // Tarak
// Adding and Removing Elements
members.push("Kiran"); // Add at end
members.unshift("Ravi"); // Add at beginning
members.pop(); // Remove last
members.shift(); // Remove first
console.log(members);
// Searching Elements
console.log(members.includes("Siddu")); // true
console.log(members.indexOf("Venu")); // 2
// Looping Through Arrays
for (let member of members) {
  console.log(member);
}
//Array Methods
let scores = [40, 55, 70, 85, 95];
// map()
let bonusScores = scores.map(score => score + 5);
console.log(bonusScores);
// filter()
let passed = scores.filter(score => score >= 60);
console.log(passed);
// reduce()
let total = scores.reduce((sum, score) => sum + score, 0);
console.log(total);
// find()
let firstHighScore = scores.find(score => score > 80);
console.log(firstHighScore);
// findIndex()
let index = scores.findIndex(score => score > 80);
console.log(index);
// some()
console.log(scores.some(score => score < 50)); // true
// every()
console.log(scores.every(score => score >= 40)); // true
// forEach()
scores.forEach(score => {
  console.log(`Score: ${score}`);
});
// sort()
let sortedScores = [...scores].sort((a, b) => b - a);
console.log(sortedScores);
// join()
console.log(members.join(" | "));
// Flattening Arrays
let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
console.log(nestedArray.flat(2));
// Removing Duplicate Values
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);