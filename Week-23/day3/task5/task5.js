const output = document.getElementById("output");
// Get User Details
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 101,
                name: "Taraka",
                email: "taraka@gmail.com"
            };
            resolve(user);
        }, 1000);
    });
}
//Get User Profile
function getProfile(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const profile = {
                ...user,
                role: "Frontend Developer",
                department: "IT"
            };
            resolve(profile);
        }, 1000);
    });
}
// Get User Skills
function getSkills(profile) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const skills = {
                ...profile,
                skills: ["HTML", "CSS", "JavaScript", "React"]
            };
            resolve(skills);
        }, 1000);
    });
}
// Display Final Result
function displayResult(data) {
    output.innerHTML += `
        <h3>User Details</h3>
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <h3>Profile Details</h3>
        <p>Role: ${data.role}</p>
        <p>Department: ${data.department}</p>
        <h3>Skills</h3>
        <p>${data.skills.join(", ")}</p>
    `;
}
//Promise Chaining
function startProcess() {
    output.innerHTML = "Loading User Details...";
    getUser()
        .then((user) => {
            output.innerHTML = `
                User Loaded Successfully: ${user.name}<br>
                Loading Profile...
            `;
            return getProfile(user);
        })
        .then((profile) => {
            output.innerHTML += `
                <br>Profile Loaded Successfully
                <br>Loading Skills...
            `;
            return getSkills(profile);
        })
        .then((skills) => {
            output.innerHTML += "<br>All Data Loaded Successfully!";
            displayResult(skills);
        })
        .catch((error) => {
            output.innerHTML = "Error: " + error.message;
        })
        .finally(() => {
            console.log("Promise Chain Completed");
        });
}