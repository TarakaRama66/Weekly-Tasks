function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. String to Number
    print("1. STRING TO NUMBER", "");

    const age = "25";

    print("Original value", age);
    print("Original type", typeof age);
    print("Number()", Number(age));
    print("Converted type", typeof Number(age));
    print("parseInt()", parseInt("25.8"));
    print("parseFloat()", parseFloat("25.8"));

    // 2. Number to String
    print("\n2. NUMBER TO STRING", "");

    const price = 1500;

    print("Original value", price);
    print("Converted value", String(price));
    print("Converted type", typeof String(price));

    // 3. Conversion to Boolean
    print("\n3. BOOLEAN CONVERSION", "");

    print('Boolean("Hello")', Boolean("Hello"));
    print('Boolean("")', Boolean(""));
    print("Boolean(1)", Boolean(1));
    print("Boolean(0)", Boolean(0));
    print("Boolean(null)", Boolean(null));
    print("Boolean(undefined)", Boolean(undefined));

    // 4. Invalid conversions
    print("\n4. INVALID CONVERSIONS", "");

    print('Number("Hello")', Number("Hello"));
    print('parseInt("Hello")', parseInt("Hello"));
    print('Number("")', Number(""));
    print('Number("  ")', Number("  "));

    // 5. Implicit coercion with +
    print("\n5. PLUS OPERATOR", "");

    print('"10" + 5', "10" + 5);
    print("10 + 5", 10 + 5);
    print('"Age: " + 25', "Age: " + 25);

    // 6. Implicit coercion with -
    print("\n6. MINUS OPERATOR", "");

    print('"10" - 5', "10" - 5);
    print('"20" - "8"', "20" - "8");
    print('"Hello" - 2', "Hello" - 2);

    // 7. Equality operators
    print("\n7. EQUALITY OPERATORS", "");

    print('5 == "5"', 5 == "5");
    print('5 === "5"', 5 === "5");
    print('0 == false', 0 == false);
    print('0 === false', 0 === false);

    // 8. Null and undefined
    print("\n8. NULL AND UNDEFINED", "");

    print("null == undefined", null == undefined);
    print("null === undefined", null === undefined);

    // 9. Practical example
    print("\n9. SHOPPING BILL", "");

    const quantityInput = "3";
    const priceInput = "250";

    const quantity = Number(quantityInput);
    const itemPrice = Number(priceInput);
    const total = quantity * itemPrice;

    print("Quantity", quantity);
    print("Item price", itemPrice);
    print("Total bill", total);

    // 10. Safe numeric validation
    print("\n10. INPUT VALIDATION", "");

    const userInput = "450";
    const amount = Number(userInput);

    if (userInput.trim() !== "" && Number.isFinite(amount)) {
        print("Valid amount", amount);
    } else {
        print("Error", "Please enter a valid number");
    }

    output.textContent += "\nAll examples completed!";
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
