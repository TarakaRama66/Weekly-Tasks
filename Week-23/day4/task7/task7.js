
const output = document.getElementById("output");

// 1. Create Map
let employees = new Map();

// Add employees
function addEmployee() {

    employees.set(1, "Rahul");
    employees.set(2, "Priya");
    employees.set(3, "Kiran");

    output.innerHTML = "<h3>Employees Added Successfully</h3>";
}

// 2. Display employees
function displayEmployees() {

    let result = "";

    employees.forEach((name, id) => {
        result += `<p>ID: ${id}, Name: ${name}</p>`;
    });

    output.innerHTML = result;
}

// 3. Update employee
function updateEmployee() {

    employees.set(2, "Sneha");

    output.innerHTML = "<h3>Employee Updated Successfully</h3>";
}

// 4. Delete employee
function deleteEmployee() {

    employees.delete(3);

    output.innerHTML = "<h3>Employee Deleted Successfully</h3>";
}

// 5. Remove duplicates using Set
function removeDuplicates() {

    let numbers = [10, 20, 10, 30, 20, 40, 50];

    let uniqueNumbers = [...new Set(numbers)];

    output.innerHTML = `
        <h3>Original Array</h3>
        <p>${numbers}</p>

        <h3>Unique Values</h3>
        <p>${uniqueNumbers}</p>
    `;
}

// 6. Find common elements using Set
function commonElements() {

    let arr1 = [10, 20, 30, 40];
    let arr2 = [30, 40, 50, 60];

    let set2 = new Set(arr2);

    let common = [...new Set(arr1)].filter(num =>
        set2.has(num)
    );

    output.innerHTML = `
        <h3>Common Elements</h3>
        <p>${common}</p>
    `;
}
