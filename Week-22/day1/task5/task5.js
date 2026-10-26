function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. Arithmetic Operators
    print("1. ARITHMETIC OPERATORS", "");

    const a = 20;
    const b = 6;

    print("Addition", a + b);
    print("Subtraction", a - b);
    print("Multiplication", a * b);
    print("Division", a / b);
    print("Remainder", a % b);
    print("Exponentiation", a ** 2);

    let count = 5;
    count++;
    print("Increment", count);

    count--;
    print("Decrement", count);

    // 2. Assignment Operators
    print("\n2. ASSIGNMENT OPERATORS", "");

    let score = 10;

    score += 5;
    print("score += 5", score);

    score -= 3;
    print("score -= 3", score);

    score *= 2;
    print("score *= 2", score);

    score /= 4;
    print("score /= 4", score);

    score %= 3;
    print("score %= 3", score);

    // 3. Comparison Operators
    print("\n3. COMPARISON OPERATORS", "");

    const x = 10;
    const y = "10";

    print("x == y", x == y);
    print("x === y", x === y);
    print("x != y", x != y);
    print("x !== y", x !== y);
    print("x > 5", x > 5);
    print("x < 5", x < 5);
    print("x >= 10", x >= 10);
    print("x <= 9", x <= 9);

    // 4. Logical Operators
    print("\n4. LOGICAL OPERATORS", "");

    const age = 24;
    const hasID = true;
    const isBlocked = false;

    print("Eligible by age and ID", age >= 18 && hasID);
    print("Eligible by age or ID", age >= 18 || hasID);
    print("Not blocked", !isBlocked);
    print("Blocked and has ID", isBlocked && hasID);

    // 5. Ternary Operator
    print("\n5. TERNARY OPERATOR", "");

    const marks = 78;

    const result = marks >= 40 ? "Pass" : "Fail";
    const grade = marks >= 90 ? "A" :
                  marks >= 75 ? "B" :
                  marks >= 60 ? "C" : "D";

    print("Exam result", result);
    print("Grade", grade);

    // 6. Nullish Coalescing
    print("\n6. NULLISH COALESCING", "");

    const username = null;
    const displayName = username ?? "Guest";

    const points = 0;
    const displayPoints = points ?? 100;

    print("Display name", displayName);
    print("Points", displayPoints);

    // 7. Optional Chaining
    print("\n7. OPTIONAL CHAINING", "");

    const employee = {
        name: "Rahul",
        department: {
            name: "Development"
        }
    };

    print("Employee name", employee.name);
    print("Department", employee.department?.name);
    print("Manager", employee.manager?.name);

    // 8. Practical Employee Bonus Calculator
    print("\n8. EMPLOYEE BONUS CALCULATOR", "");

    const salary = 40000;
    const performanceRating = 5;
    const attendance = 95;

    const eligible =
        performanceRating >= 4 &&
        attendance >= 90;

    const bonus = eligible ? salary * 0.10 : 0;

    print("Basic salary", salary);
    print("Performance rating", performanceRating);
    print("Attendance", attendance + "%");
    print("Bonus eligible", eligible);
    print("Bonus amount", bonus);
    print("Total salary with bonus", salary + bonus);
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
