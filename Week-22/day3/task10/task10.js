const objectBtn = document.getElementById("objectBtn");
const arrayBtn = document.getElementById("arrayBtn");
const parseBtn = document.getElementById("parseBtn");
const output = document.getElementById("output");

// JavaScript object
const employee = {
    id: 101,
    name: "Ravi",
    department: "IT",
    salary: 35000
};

// JavaScript array
const employees = [
    { id: 101, name: "Ravi" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Kiran" }
];

// Convert object into JSON string
objectBtn.addEventListener("click", function () {
    const jsonString = JSON.stringify(employee, null, 2);

    output.textContent =
        "Object converted into JSON string:\n\n" + jsonString;

    console.log(typeof jsonString); // string
});

// Convert array into JSON string
arrayBtn.addEventListener("click", function () {
    const jsonString = JSON.stringify(employees, null, 2);

    output.textContent =
        "Array converted into JSON string:\n\n" + jsonString;
});

// Convert JSON string into JavaScript object
parseBtn.addEventListener("click", function () {
    const jsonString = '{"id":104,"name":"Anu","department":"HR"}';

    const parsedObject = JSON.parse(jsonString);

    output.textContent =
        "JSON converted into JavaScript object:\n\n" +
        "Name: " + parsedObject.name + "\n" +
        "Department: " + parsedObject.department + "\n" +
        "Data type: " + typeof parsedObject;
});