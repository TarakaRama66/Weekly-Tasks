function fetchUser(callback) {
    console.log("Fetching User Data...");
    setTimeout(() => {
        let user = {
            name: "Gupta",
            role: "Frontend Developer"
        };
        callback(user);
    }, 2000);
}
document.getElementById("btn")
.addEventListener("click", () => {
    fetchUser((user) => {
        console.log(user.name);
        console.log(user.role);
    });
});

function makePayment(callback) {

    console.log("Processing Payment...");

    setTimeout(() => {
        console.log("Payment Successful");
        callback();
    }, 3000);

}

function placeOrder() {
    console.log("Order Placed Successfully");
}

makePayment(placeOrder);