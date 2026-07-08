// Basic
function getData() {
    return new Promise((resolve, reject) => {
        reject("Server Error");
    });
}

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

// Successful response
function getUser() {
    return new Promise((resolve) => {
        resolve("Gupta");
    });
}

async function fetchUser() {
    try {
        const user = await getUser();
        console.log("User:", user);
    } catch (error) {
        console.log(error);
    }
}

fetchUser();

//Login Validation
function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "1234") {
            resolve("Login Successful");
        } else {
            reject("Invalid Credentials");
        }
    });
}

async function userLogin() {
    try {
        const result = await login("admin", "1111");
        console.log(result);
    } catch (error) {
        console.log("Login Failed:", error);
    }
}

userLogin();