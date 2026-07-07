// Comparison Operator
let x = 5;
console.log("Comparison Operator:", x != 8);

// else if
const time = 39;
let greeting;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log("Else If:", greeting);

// if condition
let age1 = 18;
let text1 = "You cannot drive!";

if (age1 >= 18) {
    text1 = "You can drive!";
}

console.log("If Condition:", text1);

// if else
const hour = 24;
let greeting2;

if (hour < 20) {
    greeting2 = "Good day";
} else {
    greeting2 = "Good evening";
}

console.log("If Else:", greeting2);

// Nested if
let age2 = 15;
let country = "India";
let text3 = "You cannot drive!";

if (country === "India") {
    if (age2 >= 16) {
        text3 = "You can drive!";
    }
}

console.log("Nested If:", text3);

// Switch Statement
let text4;

switch (new Date().getDay()) {
    case 4:
    case 5:
        text4 = "Soon it is Weekend";
        break;

    case 0:
    case 6:
        text4 = "It is Weekend";
        break;

    default:
        text4 = "Looking forward to the Weekend";
}

console.log("Switch:", text4);

// Ternary Operator
let age3 = 19;

let text5 = age3 < 18 ? "Minor" : "Major";

console.log("Ternary Operator:", text5);

