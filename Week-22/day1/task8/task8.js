function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. for loop
    print("1. FOR LOOP", "");

    for (let i = 1; i <= 5; i++) {
        print("Number", i);
    }

    // 2. while loop
    print("\n2. WHILE LOOP", "");

    let count = 1;

    while (count <= 3) {
        print("Count", count);
        count++;
    }

    // 3. do...while loop
    print("\n3. DO...WHILE LOOP", "");

    let number = 1;

    do {
        print("Number", number);
        number++;
    } while (number <= 3);

    // 4. for...of loop
    print("\n4. FOR...OF LOOP", "");

    const skills = ["HTML", "CSS", "JavaScript", "React"];

    for (const skill of skills) {
        print("Skill", skill);
    }

    // 5. for...in loop
    print("\n5. FOR...IN LOOP", "");

    const employee = {
        name: "Rahul",
        role: "Developer",
        salary: 40000
    };

    for (const key in employee) {
        print(key, employee[key]);
    }

    // 6. Multiplication table
    print("\n6. MULTIPLICATION TABLE", "");

    const tableNumber = 5;

    for (let i = 1; i <= 10; i++) {
        print(`${tableNumber} x ${i}`, tableNumber * i);
    }

    // 7. Sum of numbers
    print("\n7. SUM OF NUMBERS", "");

    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }

    print("Sum from 1 to 10", sum);

    // 8. Array total and average
    print("\n8. ARRAY CALCULATIONS", "");

    const marks = [80, 75, 90, 85, 70];
    let total = 0;

    for (const mark of marks) {
        total += mark;
    }

    const average = total / marks.length;

    print("Marks", marks.join(", "));
    print("Total", total);
    print("Average", average);

    // 9. Nested loops
    print("\n9. NESTED LOOPS", "");

    for (let i = 1; i <= 3; i++) {
        let row = "";

        for (let j = 1; j <= 3; j++) {
            row += `${i * j} `;
        }

        print(`Row ${i}`, row);
    }

    // 10. Reverse counting
    print("\n10. REVERSE COUNTING", "");

    for (let i = 5; i >= 1; i--) {
        print("Countdown", i);
    }

    // 11. Filter active employees using a loop
    print("\n11. ACTIVE EMPLOYEES", "");

    const employees = [
        { name: "Ravi", active: true },
        { name: "Priya", active: false },
        { name: "Arun", active: true }
    ];

    for (const person of employees) {
        if (person.active) {
            print("Active employee", person.name);
        }
    }
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
