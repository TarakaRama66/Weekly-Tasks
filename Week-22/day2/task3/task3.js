function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        reset: function() {
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();

const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    countDisplay.textContent = "Count: " + counter.increment();
});

document.getElementById("decrement").addEventListener("click", function() {
    countDisplay.textContent = "Count: " + counter.decrement();
});

document.getElementById("reset").addEventListener("click", function() {
    countDisplay.textContent = "Count: " + counter.reset();
});
