// Promise-based
function getUser() {
    return Promise.resolve("Gupta");
}

getUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });

// Async/Await
function getUser() {
    return Promise.resolve("Gupta");
}

async function displayUser() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

displayUser();

// Fetch User Data
//promise-based
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Gupta"
            });
        }, 2000);
    });
}

fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
//Async/Await
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Gupta"
            });
        }, 2000);
    });
}

async function getUserDetails() {
    try {
        const user = await fetchUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

getUserDetails();

// Promise.race()
// Promise-Based
Promise.race([
    new Promise(resolve =>
        setTimeout(() => resolve("API 1"), 3000)
    ),
    new Promise(resolve =>
        setTimeout(() => resolve("API 2"), 1000)
    )
])
.then((result) => {
    console.log(result);
});

// Async/Await
async function getFastestAPI() {
    try {
        const result = await Promise.race([
            new Promise(resolve =>
                setTimeout(() => resolve("API 1"), 3000)
            ),
            new Promise(resolve =>
                setTimeout(() => resolve("API 2"), 1000)
            )
        ]);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getFastestAPI();

// E-Commerce Dashboard
// Promise-based
function getUsers() {
    return Promise.resolve("Users Loaded");
}

function getProducts() {
    return Promise.resolve("Products Loaded");
}

function getOrders() {
    return Promise.resolve("Orders Loaded");
}

Promise.all([
    getUsers(),
    getProducts(),
    getOrders()
])
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

// Async/Await
function getUsers() {
    return Promise.resolve("Users Loaded");
}

function getProducts() {
    return Promise.resolve("Products Loaded");
}

function getOrders() {
    return Promise.resolve("Orders Loaded");
}

async function loadDashboard() {
    try {
        const data = await Promise.all([
            getUsers(),
            getProducts(),
            getOrders()
        ]);

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

loadDashboard();