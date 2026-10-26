function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // Variable Declaration
    print("1. VARIABLE DECLARATION", "");

    var employeeName = "Tarak";
    let age = 25;
    const company = "NYB Infotech";

    print("Employee Name", employeeName);
    print("Age", age);
    print("Company", company);

    //Reassignment
    print("\nREASSIGNMENT", "");

    employeeName = "TarakRam";
    age = 26;

    print("Updated Name", employeeName);
    print("Updated Age", age);

    //Redeclaration
    print("\nREDECLARATION", "");

    var salary = 30000;
    var salary = 40000;

    print("Redeclared salary", salary);

    // const with Objects and Arrays
    print("\nCONST WITH OBJECTS AND ARRAYS", "");

    const employee = {
        name: "Kiran",
        role: "Developer"
    };

    const skills = ["HTML", "CSS", "JavaScript"];

    employee.name = "Suresh";
    skills.push("React");

    print("Updated Employee", JSON.stringify(employee));
    print("Updated Skills", skills.join(", "));

    // Block Scope
    print("\nBLOCK SCOPE", "");

    if (true) {
        var first = "var is accessible outside the block";
        let second = "let is accessible inside the block";
        const third = "const is accessible inside the block";

        print("Inside block let", second);
        print("Inside block const", third);
    }

    print("Outside block var", first);
    print("Outside block let", typeof second);
    print("Outside block const", typeof third);

    // Function Scope
    print("\nFUNCTION SCOPE", "");

    function calculateBonus() {
        var bonus = 5000;
        let incentive = 2000;
        const allowance = 1000;

        print("Bonus", bonus);
        print("Incentive", incentive);
        print("Allowance", allowance);
    }

    calculateBonus();

    //Hoisting
    print("\nHOISTING", "");

    print("var before declaration", hoistedValue);

    var hoistedValue = 100;

    print("var after declaration", hoistedValue);

    // Data Types
    print("\nDATA TYPES", "");

    const productName = "Laptop";
    const price = 55000;
    const isAvailable = true;
    const unknownValue = undefined;
    const emptyValue = null;

    print("String", typeof productName);
    print("Number", typeof price);
    print("Boolean", typeof isAvailable);
    print("Undefined", typeof unknownValue);
    print("Null", typeof emptyValue);
    print("Array", Array.isArray(skills));

    // Type Conversion
    print("\nTYPE CONVERSION", "");

    const inputValue = "250";
    const convertedValue = Number(inputValue);

    print("Original value", inputValue);
    print("Original type", typeof inputValue);
    print("Converted value", convertedValue);
    print("Converted type", typeof convertedValue);

    // Type Coercion
    print("\nTYPE COERCION", "");

    print('"5" + 2', "5" + 2);
    print('"5" - 2', "5" - 2);
    print('5 == "5"', 5 == "5");
    print('5 === "5"', 5 === "5");

    // Employee Salary Calculation
    print("\nEMPLOYEE SALARY", "");

    const basicSalary = 35000;
    const bonusAmount = 5000;
    let monthlySalary = basicSalary + bonusAmount;

    monthlySalary += 2000;

    const annualSalary = monthlySalary * 12;

    print("Basic Salary", basicSalary);
    print("Bonus", bonusAmount);
    print("Updated Monthly Salary", monthlySalary);
    print("Annual Salary", annualSalary);

    // Error Handling for const
    print("\nCONST REASSIGNMENT", "");

    const fixedAmount = 1000;

    try {
        fixedAmount = 2000;
    } catch (error) {
        print("Error Type", error.name);
        print("Error Message", error.message);
    }

    print("Original fixed amount", fixedAmount);

    output.textContent += "\nAll examples executed!";
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
