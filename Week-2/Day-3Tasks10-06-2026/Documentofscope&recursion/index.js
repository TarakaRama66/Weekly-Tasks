// Examples
const globalVar = "global";

function example() {
    const localVar = "local";
    console.log(globalVar); // accessible
}

function factorial(n) {
    if (n <= 1) {
        return 1; // base case
    }

    return n * factorial(n - 1);
}

console.log(factorial(4));