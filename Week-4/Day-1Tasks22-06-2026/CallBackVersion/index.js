function login(callback) {
    setTimeout(() => {
        console.log("Login Success");
        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(() => {
        console.log("Profile Loaded");
        callback();
    }, 1000);
}

function getOrders(callback) {
    setTimeout(() => {
        console.log("Orders Loaded");
        callback();
    }, 1000);
}

login(() => {
    getProfile(() => {
        getOrders(() => {
            console.log("All Data Loaded");
        });
    });
});