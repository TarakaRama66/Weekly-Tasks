// Checks if any student is failed using some() 
let marks = [84, 66, 72, 30, 89];

let hasFailed = marks.some(mark => mark < 35);

console.log(hasFailed);

// heck All students passed using every()
let marks1 = [84, 72, 66, 38, 89];

let allPassed = marks1.every(mark => mark >= 35);

console.log(allPassed); 

// Gym Memebers Active check some()
let members = [
    { name: "Gupta", active: true },
    { name: "siddu", active: false },
    { name: "Koushik", active: true },
    { name: "Venu",  active: true}
];

let inactiveExists = members.some(member => !member.active);

console.log(inactiveExists)

// All Gym members Active using Every()
let members1 = [
    { name: "Gupta", active: true},
    { name: "siddu", active: true},
    { name: "Koushik", active: true},
    { name: "Venu",  active: true}
];
let allActive = members1.every(member => member.active);

console.log(allActive);