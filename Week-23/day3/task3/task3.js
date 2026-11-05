// Callback Function Example
function greet(name, callback) {
    document.getElementById("output").innerHTML +=
        "Hello " + name + "<br>";
    callback();
}
function message() {
    document.getElementById("output").innerHTML +=
        "Welcome to JavaScript Callbacks!";
}
function startProcess() {
    document.getElementById("output").innerHTML = "";
    greet("Taraka", message);
}
// Callback with Parameters
function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}
function displayResult(result) {
    document.getElementById("output").innerHTML +=
        "<br>Addition Result: " + result;
}
// Nested Callback Example
function getUser(callback) {
    setTimeout(() => {
        callback("User Data Loaded");
    }, 1000);
}
function getProducts(callback) {
    setTimeout(() => {
        callback("Product Data Loaded");
    }, 1000);
}
function getOrders(callback) {
    setTimeout(() => {
        callback("Order Data Loaded");
    }, 1000);
}
// Callback Hell Example
function callbackHell() {
    const output = document.getElementById("output");
    output.innerHTML = "Loading Data...<br>";
    getUser((user) => {
        output.innerHTML += user + "<br>";
        getProducts((products) => {
            output.innerHTML += products + "<br>";
            getOrders((orders) => {
                output.innerHTML += orders + "<br>";
                output.innerHTML += "All Tasks Completed!";
            });
        });
    });
}
// Avoid Callback Hell using Named Functions
function handleUser(user) {
    const output = document.getElementById("output");
    output.innerHTML += user + "<br>";
    getProducts(handleProducts);
}
function handleProducts(products) {
    const output = document.getElementById("output");
    output.innerHTML += products + "<br>";
    getOrders(handleOrders);
}
function handleOrders(orders) {
    const output = document.getElementById("output");
    output.innerHTML += orders + "<br>";
    output.innerHTML += "Process Completed!";
}
function avoidCallbackHell() {
    document.getElementById("output").innerHTML =
        "Loading Data...<br>";
    getUser(handleUser);
}