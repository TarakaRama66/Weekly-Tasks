// Global Scope
let company = "OpenAI";

function showCompany() {
    console.log(company);
}

showCompany();
console.log(company);

// Function Scope
function displayMessage() {
    var message = "Hello JavaScript";
    console.log(message);
}

displayMessage();

// Block Scope
{
    let age = 23;
    const country = "India";

    console.log(age);
    console.log(country);
}