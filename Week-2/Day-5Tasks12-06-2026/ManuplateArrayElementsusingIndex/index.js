// Creating an array
let employees = ["Koushik", "Siddu", "Venu", "Gupta"];

console.log("Original Array:");
console.log(employees);

// Accessing elements using indexes
console.log("\nAccessing Elements:");
console.log("First Employee:", employees[0]);
console.log("Second Employee:", employees[1]);
console.log("Last Employee:", employees[employees.length - 1]);

// Updating an element
employees[1] = "Shiva";

console.log("\nAfter Updating Index 1:");
console.log(employees);

// Adding a new element using index
employees[employees.length] = "Harsha";

console.log("\nAfter Adding New Employee:");
console.log(employees);

// Accessing all elements using loop
console.log("\nDisplaying All Employees:");

for (let i = 0; i < employees.length; i++) {
    console.log(`Index ${i} : ${employees[i]}`);
}

// Manipulating elements based on index
console.log("\nEven and Odd Index Elements:");

for (let i = 0; i < employees.length; i++) {
    if (i % 2 === 0) {
        console.log(`Even Index ${i}: ${employees[i]}`);
    } else {
        console.log(`Odd Index ${i}: ${employees[i]}`);
    }
}

// Replacing another element
employees[3] = "Tarak";

console.log("\nAfter Replacing Index 3:");
console.log(employees);

// Final array
console.log("\nFinal Array:");
console.log(employees);