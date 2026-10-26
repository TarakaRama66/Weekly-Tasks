function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. Day of the week
    print("1. DAY OF THE WEEK", "");

    const day = 3;
    let dayName;

    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day";
    }

    print("Day number", day);
    print("Day name", dayName);

    // 2. Calculator
    print("\n2. CALCULATOR", "");

    const a = 20;
    const b = 5;
    const operator = "*";
    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b !== 0 ? a / b : "Cannot divide by zero";
            break;
        case "%":
            result = b !== 0 ? a % b : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator";
    }

    print("Expression", `${a} ${operator} ${b}`);
    print("Result", result);

    // 3. Employee department
    print("\n3. EMPLOYEE DEPARTMENT", "");

    const role = "developer";
    let department;

    switch (role.toLowerCase()) {
        case "developer":
            department = "IT";
            break;
        case "manager":
            department = "Management";
            break;
        case "hr":
            department = "Human Resources";
            break;
        case "designer":
            department = "UI/UX Design";
            break;
        default:
            department = "Department not found";
    }

    print("Employee role", role);
    print("Department", department);

    // 4. Grade description
    print("\n4. GRADE DESCRIPTION", "");

    const grade = "A";
    let description;

    switch (grade) {
        case "A":
            description = "Excellent";
            break;
        case "B":
            description = "Very Good";
            break;
        case "C":
            description = "Good";
            break;
        case "D":
            description = "Needs Improvement";
            break;
        case "F":
            description = "Failed";
            break;
        default:
            description = "Invalid grade";
    }

    print("Grade", grade);
    print("Description", description);

    // 5. Multiple cases
    print("\n5. WEEKDAY OR WEEKEND", "");

    const selectedDay = "Sunday";
    let category;

    switch (selectedDay) {
        case "Saturday":
        case "Sunday":
            category = "Weekend";
            break;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            category = "Weekday";
            break;
        default:
            category = "Invalid day";
    }

    print("Selected day", selectedDay);
    print("Category", category);

    // 6. Membership discount
    print("\n6. MEMBERSHIP DISCOUNT", "");

    const membership = "gold";
    let discount;

    switch (membership.toLowerCase()) {
        case "platinum":
            discount = "30%";
            break;
        case "gold":
            discount = "20%";
            break;
        case "silver":
            discount = "10%";
            break;
        case "regular":
            discount = "0%";
            break;
        default:
            discount = "Invalid membership";
    }

    print("Membership", membership);
    print("Discount", discount);
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
