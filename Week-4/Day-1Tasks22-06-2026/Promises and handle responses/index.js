const order = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Order Confirmed");
    }, 1000);

});

order
    .then((message) => {
        console.log(message);
        return "Payment Completed";
    })
    .then((message) => {
        console.log(message);
        return "Order Shipped";
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });