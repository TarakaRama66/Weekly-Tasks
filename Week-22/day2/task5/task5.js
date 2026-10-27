const employee = {
    id: 101,
    name: "Rohit",
    age: 24,

    department: {
        name: "IT",
        location: "Hyderabad",
        manager: "Poori"
    },

    skills: ["HTML", "CSS", "JavaScript"],

    address: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    }
};
// Display employee details
function showEmployee() {
    document.getElementById("output").innerHTML = `
        <h3>Employee Details</h3>
        <p>ID: ${employee.id}</p>
        <p>Name: ${employee.name}</p>
        <p>Age: ${employee.age}</p>

        <h3>Department Details</h3>
        <p>Department: ${employee.department.name}</p>
        <p>Location: ${employee.department.location}</p>
        <p>Manager: ${employee.department.manager}</p>

        <h3>Skills</h3>
        <p>${employee.skills.join(", ")}</p>

        <h3>Address</h3>
        <p>City: ${employee.address.city}</p>
        <p>State: ${employee.address.state}</p>
        <p>Country: ${employee.address.country}</p>
    `;
}

// Update and manipulate the nested object
function updateEmployee() {
    employee.age = 25;

    employee.department.location = "Bengaluru";

    employee.skills.push("React");

    employee.address.city = "Chennai";

    employee.salary = 35000;

    showEmployee();
}
