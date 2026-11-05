const API_URL = "https://dummyjson.com/products";
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const productContainer = document.getElementById("productContainer");
//fetch all products
async function fetchProducts() {
    try {
        loading.innerHTML = "Loading Products...";
        error.innerHTML = "";
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        displayProducts(data.products);
    }
    catch (err) {
        error.innerHTML = err.message;
    }
    finally {
        loading.innerHTML = "";
    }
}
//display products
function displayProducts(products) {
    productContainer.innerHTML = "";
    if (products.length === 0) {
        productContainer.innerHTML =
            "<h3>No Products Found!</h3>";
        return;
    }
    products.forEach(product => {
        productContainer.innerHTML += `
            <div>
                <img
                    src="${product.thumbnail}"
                    width="120"
                    height="120"
                    alt="${product.title}"
                >
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Rating: ${product.rating}</p>
                <hr>
            </div>
        `;
    });
}
//search products
async function searchProducts(searchValue) {
    try {
        loading.innerHTML = "Searching Products...";
        error.innerHTML = "";
        productContainer.innerHTML = "";
        const response = await fetch(
            `${API_URL}/search?q=${encodeURIComponent(searchValue)}`
        );
        if (!response.ok) {
            throw new Error("Product Search Failed");
        }
        const data = await response.json();
        displayProducts(data.products);
    }
    catch (err) {
        error.innerHTML = "Error: " + err.message;
    }
    finally {
        loading.innerHTML = "";
    }
}
//debounce function
function debounce(callback, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
//handle search 
function handleSearch(event) {
    const searchValue = event.target.value.trim();
    error.innerHTML = "";
    if (searchValue === "") {
        fetchProducts();
        return;
    }
    searchProducts(searchValue);
}
// Apply Debouncing
const debouncedSearch = debounce(handleSearch, 500);
searchInput.addEventListener(
    "input",
    debouncedSearch
);
//clear search
clearButton.addEventListener("click", () => {
    searchInput.value = "";
    error.innerHTML = "";
    fetchProducts();
});
//initial api call
fetchProducts();