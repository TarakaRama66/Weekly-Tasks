function showResults() {
    // 1. Spread operator with arrays
    const firstArray = [10, 20, 30];
    const secondArray = [40, 50, 60];

    const combinedArray = [...firstArray, ...secondArray];

    // Copy an array
    const copiedArray = [...firstArray];

    // 2. Rest operator with functions
    function calculateTotal(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    // 3. Spread operator with objects
    const employee = {
        name: "Ravi",
        role: "Developer"
    };

    const updatedEmployee = {
        ...employee,
        salary: 35000
    };

    // 4. Update an existing property
    const promotedEmployee = {
        ...updatedEmployee,
        role: "Senior Developer"
    };

    // 5. Rest operator with array destructuring
    const [first, second, ...remaining] = combinedArray;

    // Display results
    document.getElementById("output").innerHTML = `
        <h3>Spread Operator - Arrays</h3>
        <p>First Array: ${firstArray.join(", ")}</p>
        <p>Second Array: ${secondArray.join(", ")}</p>
        <p>Combined Array: ${combinedArray.join(", ")}</p>
        <p>Copied Array: ${copiedArray.join(", ")}</p>

        <h3>Rest Operator - Function</h3>
        <p>Total: ${calculateTotal(10, 20, 30, 40)}</p>

        <h3>Spread Operator - Objects</h3>
        <p>Name: ${updatedEmployee.name}</p>
        <p>Role: ${updatedEmployee.role}</p>
        <p>Salary: ₹${updatedEmployee.salary}</p>

        <h3>Updated Employee</h3>
        <p>Role: ${promotedEmployee.role}</p>

        <h3>Rest Operator - Destructuring</h3>
        <p>First: ${first}</p>
        <p>Second: ${second}</p>
        <p>Remaining: ${remaining.join(", ")}</p>
    `;
}
