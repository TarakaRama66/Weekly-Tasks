const output = document.getElementById("output");
// Reusable Promise Function
function createPromise(name, delay, status = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                resolve(name + " Completed Successfully");
            } else {
                reject(name + " Failed");
            }
        }, delay);
    });
}
// Promise.all()
function promiseAll() {
    output.innerHTML = "Promise.all() Loading...";
    Promise.all([
        createPromise("Task 1", 1000),
        createPromise("Task 2", 2000),
        createPromise("Task 3", 1500)
    ])
    .then((result) => {
        output.innerHTML = "<h3>Promise.all() Result</h3>";
        result.forEach(item => {
            output.innerHTML += item + "<br>";
        });
    })
    .catch((error) => {
        output.innerHTML = "Error: " + error;
    });
}
// Promise.allSettled()
function promiseAllSettled() {
    output.innerHTML = "Promise.allSettled() Loading...";
    Promise.allSettled([
        createPromise("Task 1", 1000, true),
        createPromise("Task 2", 1500, false),
        createPromise("Task 3", 2000, true)
    ])
    .then((result) => {
        output.innerHTML = "<h3>Promise.allSettled() Result</h3>";
        result.forEach(item => {
            if (item.status === "fulfilled") {
                output.innerHTML +=
                    "Success: " + item.value + "<br>";
            } else {
                output.innerHTML +=
                    "Error: " + item.reason + "<br>";
            }
        });
    });
}
// Promise.race()
function promiseRace() {
    output.innerHTML = "Promise.race() Loading...";
    Promise.race([
        createPromise("Task 1", 3000),
        createPromise("Task 2", 1000),
        createPromise("Task 3", 2000)
    ])
    .then((result) => {
        output.innerHTML =
            "<h3>Promise.race() Result</h3>" + result;
    })
    .catch((error) => {
        output.innerHTML = "Error: " + error;
    });
}
// Promise.any()
function promiseAny() {
    output.innerHTML = "Promise.any() Loading...";
    Promise.any([
        createPromise("Task 1", 1000, false),
        createPromise("Task 2", 2000, true),
        createPromise("Task 3", 1500, true)
    ])
    .then((result) => {
        output.innerHTML =
            "<h3>Promise.any() Result</h3>" + result;
    })
    .catch((error) => {
        output.innerHTML =
            "All Promises Failed: " + error.errors.join(", ");
    });
}
// Clear Output
function clearOutput() {
    output.innerHTML = "";
}