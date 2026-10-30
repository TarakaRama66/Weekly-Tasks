
// Selecting HTML Elements
const clickBtn = document.getElementById("clickBtn");

const clickCount = document.getElementById("clickCount");

const clickStatus = document.getElementById("clickStatus");

const scrollCount = document.getElementById("scrollCount");


// Counters
let totalClicks = 0;

let executedClicks = 0;

let executedScrolls = 0;


// Throttle Function
function throttle(callback, delay) {

    let lastExecution = 0;

    return function (...args) {

        const currentTime = Date.now();

        // Check whether delay has passed
        if (currentTime - lastExecution >= delay) {

            lastExecution = currentTime;

            callback(...args);

        }

    };

}


// Button Click Function
function handleClick() {

    executedClicks++;

    clickCount.textContent =
        "Executed Clicks: " + executedClicks;

    clickStatus.textContent =
        "Button function executed successfully.";

}


// Create Throttled Click Function
const throttledClick = throttle(handleClick, 2000);


// Button Event
clickBtn.addEventListener("click", function () {

    totalClicks++;

    clickStatus.textContent =
        "Total Click Attempts: " + totalClicks;

    throttledClick();

});


// Scroll Function
function handleScroll() {

    executedScrolls++;

    scrollCount.textContent =
        "Scroll Executions: " + executedScrolls;

}


// Create Throttled Scroll Function
const throttledScroll = throttle(handleScroll, 1000);


// Scroll Event
window.addEventListener("scroll", throttledScroll);
