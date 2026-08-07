//for loop
let gymMembers = ["Gupta", "Siddu", "Venu", "Koushik"];

for (let i = 0; i < gymMembers.length; i++) {
    console.log(`Member ${i + 1}: ${gymMembers[i]}`);
}

// for...of
let gymMembers1 = ["Gupta", "Siddu", "Venu", "Koushik"];

for (let member of gymMembers1) {
    console.log(`Welcome ${member}`);
}

// foreach()
let gymMembers2 = ["Gupta", "Siddu", "Venu", "Koushik"];

gymMembers2.forEach((member, index) => {
    console.log(`${index + 1}. ${member}`);
});
