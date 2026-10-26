
function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. Primitive data types
    print("1. PRIMITIVE DATA TYPES", "");

    const name = "Rahul";
    const age = 25;
    const isActive = true;
    let address;
    const emptyValue = null;
    const bigNumber = 12345678901234567890n;
    const uniqueId = Symbol("id");

    print("String", typeof name);
    print("Number", typeof age);
    print("Boolean", typeof isActive);
    print("Undefined", typeof address);
    print("Null check", emptyValue === null);
    print("BigInt", typeof bigNumber);
    print("Symbol", typeof uniqueId);

    // 2. Object
    print("\n2. OBJECT", "");

    const employee = {
        name: "Priya",
        age: 24,
        role: "Developer"
    };

    print("Employee", JSON.stringify(employee));
    print("Employee name", employee.name);

    // 3. Array
    print("\n3. ARRAY", "");

    const skills = ["HTML", "CSS", "JavaScript"];

    skills.push("React");

    print("Skills", skills.join(", "));
    print("Is array", Array.isArray(skills));

    // 4. Function
    print("\n4. FUNCTION", "");

    function calculateSalary(basic, bonus) {
        return basic + bonus;
    }

    print("Function type", typeof calculateSalary);
    print("Total salary", calculateSalary(30000, 5000));

    // 5. Type conversion
    print("\n5. TYPE CONVERSION", "");

    const value = "100";
    const convertedValue = Number(value);

    print("Original type", typeof value);
    print("Converted value", convertedValue);
    print("Converted type", typeof convertedValue);

    // 6. Primitive vs reference
    print("\n6. PRIMITIVE VS REFERENCE", "");

    let firstNumber = 10;
    let secondNumber = firstNumber;
    secondNumber = 20;

    print("First number", firstNumber);
    print("Second number", secondNumber);

    const firstEmployee = { name: "Arun" };
    const secondEmployee = firstEmployee;

    secondEmployee.name = "Kiran";

    print("First employee", firstEmployee.name);
    print("Second employee", secondEmployee.name);

    // 7. Type checking
    print("\n7. TYPE CHECKING", "");

    print("Is age a number", typeof age === "number");
    print("Is name a string", typeof name === "string");
    print("Is active a boolean", typeof isActive === "boolean");
    print("Is employee an object", typeof employee === "object");

    output.textContent += "\nAll examples completed!";
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
