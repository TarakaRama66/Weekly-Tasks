console.log("Program Started");

// Timeout
let timeoutId = setTimeout(() => {
    console.log("Welcome User!");
}, 3000);

// Cancel timeout
clearTimeout(timeoutId);
console.log("Timeout Cancelled");

// Interval
let count = 1;

let intervalId = setInterval(() => {
    console.log("Count:", count);
    count++;

    if (count > 5) {
        clearInterval(intervalId);
        console.log("Interval Stopped");
    }
}, 1000);