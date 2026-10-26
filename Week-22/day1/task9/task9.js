
function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. break statement
    print("1. BREAK STATEMENT", "");

    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }

        print("Number", i);
    }

    // 2. continue statement
    print("\n2. CONTINUE STATEMENT", "");

    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }

        print("Number", i);
    }

    // 3. Print only even numbers
    print("\n3. EVEN NUMBERS", "");

    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            continue;
        }

        print("Even number", i);
    }

    // 4. Find a target in an array
    print("\n4. SEARCH AN ARRAY", "");

    const numbers = [10, 20, 30, 40, 50];
    const target = 30;
    let found = false;

    for (const number of numbers) {
        if (number === target) {
            found = true;
            print("Target found", number);
            break;
        }
    }

    if (!found) {
        print("Search result", "Target not found");
    }

    // 5. Skip failed students
    print("\n5. STUDENT RESULTS", "");

    const students = [
        { name: "Rahul", marks: 85 },
        { name: "Priya", marks: 32 },
        { name: "Arun", marks: 70 },
        { name: "Kiran", marks: 25 },
        { name: "Sneha", marks: 90 }
    ];

    for (const student of students) {
        if (student.marks < 40) {
            continue;
        }

        print("Passed student", `${student.name} - ${student.marks}`);
    }

    // 6. Stop when stock is unavailable
    print("\n6. PRODUCT STOCK CHECK", "");

    const products = [
        { name: "Laptop", stock: 5 },
        { name: "Mouse", stock: 3 },
        { name: "Keyboard", stock: 0 },
        { name: "Monitor", stock: 8 }
    ];

    for (const product of products) {
        if (product.stock === 0) {
            print("Out of stock", product.name);
            break;
        }

        print("Available product", product.name);
    }

    // 7. Skip invalid values
    print("\n7. VALID NUMBERS", "");

    const values = [10, -5, 20, 0, 30, -2];
    let total = 0;

    for (const value of values) {
        if (value <= 0) {
            continue;
        }

        total += value;
        print("Accepted value", value);
    }

    print("Total of positive values", total);

    // 8. Nested loops with break
    print("\n8. NESTED LOOP", "");

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 5; j++) {
            if (j === 3) {
                break;
            }

            print(`Outer ${i}, Inner`, j);
        }
    }
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
