
const output = document.getElementById("output");

// Display messages in the UI
function showMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

// Create a Promise with a delay
function createPromise(name, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(name + " failed"));
            } else {
                resolve(name + " completed");
            }
        }, delay);
    });
}

// 1. Promise.all()
async function runPromiseAll() {
    output.innerHTML = "";
    showMessage("Promise.all() started...");

    try {
        const results = await Promise.all([
            createPromise("Task 1", 1000),
            createPromise("Task 2", 1500),
            createPromise("Task 3", 500)
        ]);

        results.forEach(showMessage);
        showMessage("All tasks succeeded.");
    } catch (error) {
        showMessage("Error: " + error.message);
    }
}

// 2. Promise.allSettled()
async function runPromiseAllSettled() {
    output.innerHTML = "";
    showMessage("Promise.allSettled() started...");

    const results = await Promise.allSettled([
        createPromise("Task 1", 1000),
        createPromise("Task 2", 1500, true),
        createPromise("Task 3", 500)
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            showMessage(
                `Task ${index + 1}: ${result.status} - ${result.value}`
            );
        } else {
            showMessage(
                `Task ${index + 1}: ${result.status} - ${result.reason.message}`
            );
        }
    });

    showMessage("All tasks have settled.");
}

// 3. Promise.race()
async function runPromiseRace() {
    output.innerHTML = "";
    showMessage("Promise.race() started...");

    try {
        const result = await Promise.race([
            createPromise("Task 1", 1000),
            createPromise("Task 2", 300),
            createPromise("Task 3", 700)
        ]);

        showMessage("First settled result: " + result);
    } catch (error) {
        showMessage("Error: " + error.message);
    }
}

// 4. Promise.any()
async function runPromiseAny() {
    output.innerHTML = "";
    showMessage("Promise.any() started...");

    try {
        const result = await Promise.any([
            createPromise("Task 1", 1000, true),
            createPromise("Task 2", 500, true),
            createPromise("Task 3", 800)
        ]);

        showMessage("First successful result: " + result);
    } catch (error) {
        showMessage("All tasks failed: " + error.message);
    }
}

// Button events
document.getElementById("allBtn").addEventListener("click", runPromiseAll);

document.getElementById("allSettledBtn")
    .addEventListener("click", runPromiseAllSettled);

document.getElementById("raceBtn")
    .addEventListener("click", runPromiseRace);

document.getElementById("anyBtn")
    .addEventListener("click", runPromiseAny);

document.getElementById("clearBtn").addEventListener("click", () => {
    output.innerHTML = "";
});
