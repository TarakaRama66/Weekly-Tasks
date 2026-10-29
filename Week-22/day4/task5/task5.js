
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

const divideBtn = document.getElementById("divideBtn");
const parseBtn = document.getElementById("parseBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

// Display messages in the UI
function showMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Validate and divide two numbers
function divideNumbers(a, b) {
    if (a === "" || b === "") {
        throw new ValidationError("Please enter both numbers.");
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);

    if (!Number.isFinite(firstNumber) ||
        !Number.isFinite(secondNumber)) {
        throw new ValidationError("Please enter valid numbers.");
    }

    if (secondNumber === 0) {
        throw new ValidationError("Division by zero is not allowed.");
    }

    return firstNumber / secondNumber;
}

// Handle division errors
divideBtn.addEventListener("click", () => {
    output.innerHTML = "";

    showMessage("Calculation started...");

    try {
        const result = divideNumbers(
            num1Input.value,
            num2Input.value
        );

        showMessage("Result: " + result);
    } catch (error) {
        showMessage(error.name + ": " + error.message);
    } finally {
        showMessage("Calculation process completed.");
    }
});

// Handle invalid JSON
parseBtn.addEventListener("click", () => {
    output.innerHTML = "";

    showMessage("Attempting to parse JSON...");

    try {
        const invalidJSON = '{"name": "Taraka", "age": }';
        const data = JSON.parse(invalidJSON);

        showMessage("Name: " + data.name);
    } catch (error) {
        showMessage("JSON Error: " + error.message);
    } finally {
        showMessage("JSON parsing attempt finished.");
    }
});

// Clear output
clearBtn.addEventListener("click", () => {
    output.innerHTML = "";
});
