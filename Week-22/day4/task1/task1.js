const output = document.getElementById("output");
const details = document.getElementById("details");
const runBtn = document.getElementById("runBtn");
const clearBtn = document.getElementById("clearBtn");

// Display output in the UI
function showOutput(message) {
    const line = document.createElement("p");
    line.textContent = message;
    output.appendChild(line);
}

// Display explanation in the UI
function showDetail(message) {
    const item = document.createElement("li");
    item.textContent = message;
    details.appendChild(item);
}

// Demonstrate the Event Loop
function runEventLoop() {
    output.innerHTML = "";
    details.innerHTML = "";

    runBtn.disabled = true;

    // 1. Synchronous execution
    showOutput("1. Start: Synchronous execution begins");

    showDetail(
        "Synchronous code executes directly on the Call Stack."
    );

    // 2. Timer callback
    setTimeout(function () {
        showOutput("5. Timer callback executed");

        showDetail(
            "The timer callback runs when its delay has elapsed and the Call Stack is available."
        );

        runBtn.disabled = false;
    }, 1000);

    // 3. Promise microtask
    Promise.resolve().then(function () {
        showOutput("4. Promise callback executed");

        showDetail(
            "Promise callbacks run as microtasks after synchronous execution finishes."
        );
    });

    // 4. More synchronous execution
    showOutput("2. Timer and Promise tasks scheduled");

    showDetail(
        "The timer callback is scheduled, and the Promise callback is queued as a microtask."
    );

    showOutput("3. End: Synchronous execution completed");

    showDetail(
        "After synchronous code finishes, the Event Loop processes microtasks before the next timer task."
    );
}

// Button event listeners
runBtn.addEventListener("click", runEventLoop);

clearBtn.addEventListener("click", function () {
    output.innerHTML = "";
    details.innerHTML = "";
    runBtn.disabled = false;
});