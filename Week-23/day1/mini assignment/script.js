// COUNTER USING CLOSURE
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}
const counter = createCounter();
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", function () {
    countDisplay.innerText = counter.increment();
});
document.getElementById("decrement").addEventListener("click", function () {
    countDisplay.innerText = counter.decrement();
});
document.getElementById("reset").addEventListener("click", function () {
    countDisplay.innerText = counter.reset();
});
// USER SESSION MANAGEMENT USING CLOSURE
function createSession() {
    let username = null;
    let isLoggedIn = false;
    return {
        login: function (name) {
            username = name;
            isLoggedIn = true;
            return this.getStatus();
        },
        logout: function () {
            username = null;
            isLoggedIn = false;
            return this.getStatus();
        },
        getStatus: function () {
            if (isLoggedIn) {
                return "Welcome " + username;
            }
            return "No User Logged In";
        },
        getUsername: function () {
            return username;
        }
    };
}
const session = createSession();
// FUNCTION BINDING
const userDisplay = document.getElementById("user");
const statusDisplay = document.getElementById("status");
function updateSessionUI() {
    userDisplay.innerText = session.getStatus();
    statusDisplay.innerText = session.getUsername()
        ? "Status: Logged In"
        : "Status: Logged Out";
}
// Bind function with session object
const updateUI = updateSessionUI.bind(session);

// LOGIN FUNCTION

document.getElementById("login").addEventListener("click", function () {
    const name = document.getElementById("username").value.trim();
    if (name === "") {
        alert("Please enter username");
        return;
    }
    if (session.getUsername() !== null) {
        alert("Please logout before logging in again");
        return;
    }
    session.login(name);
    updateUI();
});
// LOGOUT FUNCTION
document.getElementById("logout").addEventListener("click", function () {
    if (session.getUsername() === null) {
        alert("No active session");
        return;
    }
    session.logout();
    updateUI();
    document.getElementById("username").value = "";
});