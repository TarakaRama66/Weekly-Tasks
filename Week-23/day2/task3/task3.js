let employee = {
    id: 101,
    name: "Tarak",
    department: "Frontend",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    },
    skills: ["HTML", "CSS", "JavaScript"]
};
// Display original object
function displayOriginal() {
    document.getElementById("output").textContent =
        "ORIGINAL OBJECT\n\n" +
        JSON.stringify(employee, null, 2);
}
// Shallow Copy using Spread Operator
function shallowCopySpread() {
    let copy = { ...employee };
    // Modify top-level property
    copy.name = "Kiran";
    // Modify nested property
    copy.address.city = "Bangalore";
    // Modify nested array
    copy.skills.push("React");
    document.getElementById("output").textContent =
        "SHALLOW COPY - SPREAD OPERATOR\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCopied Object:\n" +
        JSON.stringify(copy, null, 2);
}
// Shallow Copy using Object.assign()
function shallowCopyAssign() {
    let copy = Object.assign({}, employee);
    copy.name = "Arjun";
    copy.address.city = "Chennai";
    document.getElementById("output").textContent =
        "SHALLOW COPY - OBJECT.ASSIGN()\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCopied Object:\n" +
        JSON.stringify(copy, null, 2);
}
//  Deep Copy using structuredClone()
function deepCopyStructured() {
    let copy = structuredClone(employee);
    copy.name = "Priya";
    copy.address.city = "Mumbai";
    copy.skills.push("React");
    document.getElementById("output").textContent =
        "DEEP COPY - STRUCTURED CLONE\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCopied Object:\n" +
        JSON.stringify(copy, null, 2);
}
//  Deep Copy using JSON
function deepCopyJSON() {
    let copy = JSON.parse(
        JSON.stringify(employee)
    );
    copy.name = "Sneha";
    copy.address.city = "Delhi";
    copy.skills.push("Node.js");
    document.getElementById("output").textContent =
        "DEEP COPY - JSON METHOD\n\n" +
        "Original Object:\n" +
        JSON.stringify(employee, null, 2) +
        "\n\nCopied Object:\n" +
        JSON.stringify(copy, null, 2);
}