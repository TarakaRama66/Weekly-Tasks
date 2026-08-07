function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Login Success");
            resolve();
        }, 1000);
    });
}

function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Profile Loaded");
            resolve();
        }, 1000);
    });
}

function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders Loaded");
            resolve();
        }, 1000);
    });
}

login()
    .then(() => getProfile())
    .then(() => getOrders())
    .then(() => {
        console.log("All Data Loaded");
    })
    .catch((error) => {
        console.log(error);
    });