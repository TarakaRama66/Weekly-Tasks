
// Product Data
const products = [
    "Laptop",
    "Mobile Phone",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Headphones",
    "Smart Watch",
    "Tablet",
    "Printer",
    "Camera",
    "Speaker",
    "Charger"
];


// Selecting HTML Elements
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const status = document.getElementById("status");
const counter = document.getElementById("counter");


// Search API Call Counter
let apiCalls = 0;


// Debounce Function
function debounce(callback, delay) {

    let timer;

    return function (...args) {

        // Clear previous timer
        clearTimeout(timer);

        // Create new timer
        timer = setTimeout(function () {

            callback(...args);

        }, delay);

    };

}


// Search Function
function searchProducts(searchText) {

    apiCalls++;

    counter.textContent = "Search API Calls: " + apiCalls;

    results.innerHTML = "";

    const searchValue = searchText.toLowerCase().trim();

    if (searchValue === "") {

        status.textContent = "Please enter a product name.";

        return;

    }


    // Filter Products
    const filteredProducts = products.filter(function (product) {

        return product.toLowerCase().includes(searchValue);

    });


    // Display Results
    if (filteredProducts.length > 0) {

        status.textContent =
            filteredProducts.length + " product(s) found.";

        filteredProducts.forEach(function (product) {

            const div = document.createElement("p");

            div.textContent = product;

            results.appendChild(div);

        });

    } else {

        status.textContent = "No products found.";

    }

}


// Creating Debounced Search
const debouncedSearch = debounce(searchProducts, 500);


// Input Event
searchInput.addEventListener("input", function () {

    status.textContent = "Waiting for you to stop typing...";

    debouncedSearch(searchInput.value);

});
