let gymMembers = ["Gupta", "Siddu", "Koushik", "Venu"];

console.log("Using for Loop:");

for (let i = 0; i < gymMembers.length; i++) {
    console.log(gymMembers[i]);
}

console.log("\nUsing for...of Loop:");

for (let member of gymMembers) {
    console.log(member);
}

console.log("\nUsing forEach() Method:");

gymMembers.forEach(function(member) {
    console.log(member);
});