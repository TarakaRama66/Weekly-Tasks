// Promise.all()
const userPromise = Promise.resolve("User Data");
const ordersPromise = Promise.resolve("Orders Data");
const profilePromise = Promise.resolve("Profile Data");

Promise.all([userPromise, ordersPromise, profilePromise])
    .then((result) => {
        console.log("All Data Loaded:");
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Promise.race()
const server1 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 1 Response"), 3000);
});

const server2 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 2 Response"), 1000);
});

Promise.race([server1, server2])
    .then((result) => {
        console.log("Winner:", result);
    })
    .catch((error) => {
        console.log(error);
    });

//Promise.allSettled
const student1 = Promise.resolve("Pass");
const student2 = Promise.reject("Fail");
const student3 = Promise.resolve("Pass");

Promise.allSettled([student1, student2, student3])
    .then((results) => {
        console.log(results);
    });

//Promise.any()
const gateway1 = Promise.reject("Gateway 1 Down");

const gateway2 = new Promise((resolve) => {
    setTimeout(() => resolve("Gateway 2 Active"), 2000);
});

const gateway3 = new Promise((resolve) => {
    setTimeout(() => resolve("Gateway 3 Active"), 3000);
});

Promise.any([gateway1, gateway2, gateway3])
    .then((result) => {
        console.log("Connected To:", result);
    })
    .catch((error) => {
        console.log(error);
    });