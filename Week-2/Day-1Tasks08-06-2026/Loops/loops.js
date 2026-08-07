// =========================
// 1. FOR LOOP
// =========================
console.log("FOR LOOP");

for (let i = 1; i <= 3; i++) {
    console.log("Iteration:", i);
}


// =========================
// 2. WHILE LOOP
// =========================
console.log("\nWHILE LOOP");

let count = 1;

while (count <= 3) {
    console.log("Count:", count);
    count++;
}


// =========================
// 3. DO-WHILE LOOP
// =========================
console.log("\nDO-WHILE LOOP");

let num = 1;

do {
    console.log("Number:", num);
    num++;
} while (num <= 3);


// =========================
// 4. FOR...OF LOOP
// =========================
console.log("\nFOR...OF LOOP");

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}


// =========================
// 5. FOR...IN LOOP
// =========================
console.log("\nFOR...IN LOOP");

let employee = {
    name: "Gupta",
    role: "Developer",
    city: "Hyderabad"
};

for (let key in employee) {
    console.log(key + ": " + employee[key]);
}


// =========================
// 6. FOREACH LOOP
// =========================
console.log("\nFOREACH LOOP");

let students = ["Rahul", "Amit", "Suresh"];

students.forEach(function(student) {
    console.log(student);
});