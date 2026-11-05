
const output = document.getElementById("output");

// 1. Rest Operator
function addNumbers(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

function showRest() {
    let result = addNumbers(10, 20, 30, 40);

    output.innerHTML = `<h3>Total: ${result}</h3>`;
}

// 2. Spread Operator
function showSpread() {
    let arr1 = [10, 20, 30];

    let arr2 = [...arr1];

    arr2.push(40);

    output.innerHTML = `
        <h3>Original Array: ${arr1}</h3>
        <h3>Copied Array: ${arr2}</h3>
    `;
}

// 3. Merge Arrays
function mergeArrays() {
    let a = [1, 2, 3];
    let b = [4, 5, 6];

    let result = [...a, ...b];

    output.innerHTML = `<h3>${result}</h3>`;
}

// 4. Merge Objects
function mergeObjects() {
    let student = {
        name: "Rahul",
        age: 23
    };

    let details = {
        city: "Hyderabad",
        course: "JavaScript"
    };

    let result = {
        ...student,
        ...details
    };

    output.innerHTML = `
        <h3>Name: ${result.name}</h3>
        <h3>Age: ${result.age}</h3>
        <h3>City: ${result.city}</h3>
        <h3>Course: ${result.course}</h3>
    `;
}