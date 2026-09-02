// Custom Error Class
class UserError extends Error {
    constructor(message) {
        super(message);
        this.name = "UserError";
    }
}
// Save User Function
function saveUser(user) {
    try {
        // validation
        if (!user.name) {
            throw new UserError("Name is required");
        }
        if (!user.email) {
            throw new UserError("Email is required");
        }
        // Store data in localStorage
        localStorage.setItem("user",JSON.stringify(user));
        console.log("User saved successfully");
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    } finally {
        console.log("Save Operation Completed");
    }
}
// Get User Function
function getUser() {
    try {
        const userData = localStorage.getItem("user");
        if (!userData) {
            throw new UserError("No user found in localStorage");
        }
        const user = JSON.parse(userData);
        console.log("User Details:");
        console.log(user);
        return user;
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    } finally {
        console.log("Fetch Operation Completed");
    }
}
// Delete User Function
function deleteUser() {
    try {
        localStorage.removeItem("user");
        console.log("User deleted");
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Delete Operation Completed");
    }
}
// Test Data
const user = {name: "Gupta",email: "gupta@gmail.com",role: "React Developer"};
// Save User
saveUser(user);
// Get User
getUser();
// Delete User
deleteUser();
// Try fetching again
getUser();