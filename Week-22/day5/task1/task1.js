
function createCounter() {

    // Outer function variable
    let count = 0;

    // Inner function
    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function reset() {
        count = 0;
        return count;
    }

    // Returning inner functions
    return {
        increment,
        decrement,
        reset
    };
}

// Creating closure
const counter = createCounter();

// Selecting HTML elements
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function () {
    countDisplay.textContent = counter.increment();
});

document.getElementById("decrement").addEventListener("click", function () {
    countDisplay.textContent = counter.decrement();
});

document.getElementById("reset").addEventListener("click", function () {
    countDisplay.textContent = counter.reset();
});
