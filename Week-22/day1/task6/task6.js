function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. Simple if statement
    print("1. IF STATEMENT", "");

    const age = 22;

    if (age >= 18) {
        print("Voting eligibility", "Eligible to vote");
    }

    // 2. if...else
    print("\n2. IF...ELSE", "");

    const number = 17;

    if (number % 2 === 0) {
        print("Number", "Even");
    } else {
        print("Number", "Odd");
    }

    // 3. if...else if...else
    print("\n3. GRADE CALCULATOR", "");

    const marks = 82;
    let grade;

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 75) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    print("Marks", marks);
    print("Grade", grade);

    // 4. Nested if
    print("\n4. NESTED IF", "");

    const username = "admin";
    const password = "12345";

    if (username === "admin") {
        if (password === "12345") {
            print("Login", "Successful");
        } else {
            print("Login", "Incorrect password");
        }
    } else {
        print("Login", "User not found");
    }

    // 5. Multiple conditions
    print("\n5. MULTIPLE CONDITIONS", "");

    const attendance = 85;
    const examMarks = 70;

    if (attendance >= 75 && examMarks >= 40) {
        print("Student status", "Eligible and passed");
    } else {
        print("Student status", "Not eligible or failed");
    }

    // 6. Employee performance
    print("\n6. EMPLOYEE PERFORMANCE", "");

    const performance = 4.5;
    let appraisal;

    if (performance >= 4.5) {
        appraisal = "Excellent";
    } else if (performance >= 3.5) {
        appraisal = "Good";
    } else if (performance >= 2.5) {
        appraisal = "Average";
    } else {
        appraisal = "Needs Improvement";
    }

    print("Performance rating", performance);
    print("Appraisal", appraisal);

    // 7. Ternary operator
    print("\n7. TERNARY OPERATOR", "");

    const temperature = 35;

    const weather = temperature > 30
        ? "Hot"
        : "Pleasant";

    print("Temperature", temperature + "°C");
    print("Weather", weather);

    // 8. Discount calculation
    print("\n8. SHOPPING DISCOUNT", "");

    const purchaseAmount = 6000;
    let discount = 0;

    if (purchaseAmount >= 5000) {
        discount = purchaseAmount * 0.20;
    } else if (purchaseAmount >= 2000) {
        discount = purchaseAmount * 0.10;
    }

    print("Purchase amount", purchaseAmount);
    print("Discount", discount);
    print("Final amount", purchaseAmount - discount);

    // 9. Positive, negative, or zero
    print("\n9. NUMBER CHECK", "");

    const value = -10;

    if (value > 0) {
        print("Result", "Positive");
    } else if (value < 0) {
        print("Result", "Negative");
    } else {
        print("Result", "Zero");
    }
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
