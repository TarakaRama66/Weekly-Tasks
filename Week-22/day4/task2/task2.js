const output = document.getElementById("output");

function display(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

// Example 1: Callback-based code
function getUserCallback(callback) {
    setTimeout(() => {
        const user = {
            id: 1,
            name: "Taraka Ram",
            role: "Frontend Developer"
        };

        callback(user);
    }, 1000);
}

// Example 2: Convert the callback into a Promise
function getUserPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: "Taraka Ram",
                role: "Frontend Developer"
            };

            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}

// Run callback example
document.getElementById("callbackBtn").addEventListener("click", () => {
    display("Callback example started...");

    getUserCallback((user) => {
        display("Callback result:");
        display("ID: " + user.id);
        display("Name: " + user.name);
        display("Role: " + user.role);
    });
});

// Run Promise example
document.getElementById("promiseBtn").addEventListener("click", () => {
    display("Promise example started...");

    getUserPromise()
        .then((user) => {
            display("Promise result:");
            display("ID: " + user.id);
            display("Name: " + user.name);
            display("Role: " + user.role);
        })
        .catch((error) => {
            display("Error: " + error.message);
        })
        .finally(() => {
            display("Promise operation completed.");
        });
});

// Clear output
document.getElementById("clearBtn").addEventListener("click", () => {
    output.innerHTML = "";
});