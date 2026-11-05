function debounce(callback, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
// Search Products Function
const searchInput = document.getElementById("searchInput");
const searchOutput = document.getElementById("searchOutput");
function searchProducts(event) {
    const searchValue = event.target.value;
    if (searchValue.trim() === "") {
        searchOutput.innerHTML = "Please enter product name";
    } else {
        searchOutput.innerHTML =
            "Searching for: " + searchValue;
    }
    console.log("Search Executed");
}
// Applying Debounce
const debouncedSearch = debounce(searchProducts, 1000);
searchInput.addEventListener("input", debouncedSearch);

function throttle(callback, delay) {
    let lastExecution = 0;
    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastExecution >= delay) {
            lastExecution = currentTime;
            callback(...args);
        }
    };
}
// Button Click Function
let clickCount = 0;
function handleClick() {
    clickCount++;
    document.getElementById("clickOutput").innerHTML =
        "Button Executed: " + clickCount + " times";
    console.log("Button Clicked");
}
// Applying Throttle
const button = document.getElementById("clickButton");
button.addEventListener(
    "click",
    throttle(handleClick, 2000)
);

let scrollCount = 0;
function handleScroll() {
    scrollCount++;
    document.getElementById("scrollOutput").innerHTML =
        "Scroll Function Executed: " + scrollCount + " times";
}
// Applying Throttle
window.addEventListener(
    "scroll",
    throttle(handleScroll, 1000)
);