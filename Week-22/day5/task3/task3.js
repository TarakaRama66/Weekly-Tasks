// Employee 1
const employee1 = {
    name: "Taraka",
    role: "Frontend Developer",
    salary: 30000
};

// Employee 2
const employee2 = {
    name: "Rahul",
    role: "React Developer",
    salary: 40000
};

// Employee 3
const employee3 = {
    name: "Kiran",
    role: "JavaScript Developer",
    salary: 35000
};


// Common Function
function displayEmployee(city, country) {

    return `
        Name: ${this.name},
        Role: ${this.role},
        Salary: ${this.salary},
        City: ${city},
        Country: ${country}
    `;
}


// Selecting Output
const output = document.getElementById("output");


// 1. Using call()
document.getElementById("callBtn").addEventListener("click", function () {

    const result = displayEmployee.call(
        employee1,
        "Hyderabad",
        "India"
    );

    output.textContent = "CALL(): " + result;

});


// 2. Using apply()
document.getElementById("applyBtn").addEventListener("click", function () {

    const result = displayEmployee.apply(
        employee2,
        ["Bangalore", "India"]
    );

    output.textContent = "APPLY(): " + result;

});


// 3. Using bind()
document.getElementById("bindBtn").addEventListener("click", function () {

    const boundFunction = displayEmployee.bind(
        employee3,
        "Chennai",
        "India"
    );

    const result = boundFunction();

    output.textContent = "BIND(): " + result;

});
