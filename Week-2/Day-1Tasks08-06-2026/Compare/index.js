//Arguments Object
function showData() {
    console.log(arguments);
}
showData("Gupta", 25, "Developer");

//Rest Parameters
function showData(...data) {
    console.log(data);
}
showData("Gupta", 25, "Developer");

//cart 
function addToCart(...items) {
    console.log("Cart Items:");

    items.forEach(item => {
        console.log(item);
    });
}

addToCart("Laptop", "Mouse", "Keyboard");