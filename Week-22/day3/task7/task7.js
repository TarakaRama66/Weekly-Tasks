const form = document.getElementById("employeeForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

const result = document.getElementById("result");

// Validate employee name
function validateName() {
    const name = nameInput.value.trim();

    if (name === "") {
        nameError.textContent = "Name is required.";
        return false;
    }

    if (name.length < 3) {
        nameError.textContent = "Name must contain at least 3 characters.";
        return false;
    }

    nameError.textContent = "";
    return true;
}

// Validate email
function validateEmail() {
    const email = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
    }

    if (!pattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// Validate age
function validateAge() {
    const age = ageInput.value;

    if (age === "") {
        ageError.textContent = "Age is required.";
        return false;
    }

    if (!Number.isInteger(Number(age)) ||
        Number(age) < 18 ||
        Number(age) > 60) {
        ageError.textContent = "Age must be between 18 and 60.";
        return false;
    }

    ageError.textContent = "";
    return true;
}

// Display errors while typing
nameInput.addEventListener("input", function () {
    validateName();
    result.textContent = "";
});

emailInput.addEventListener("input", function () {
    validateEmail();
    result.textContent = "";
});

ageInput.addEventListener("input", function () {
    validateAge();
    result.textContent = "";
});

// Validate all fields on submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isAgeValid = validateAge();

    if (isNameValid && isEmailValid && isAgeValid) {
        result.textContent =
            "Employee registered successfully!";

        form.reset();

        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";
    } else {
        result.textContent = "Please correct the errors above.";
    }
});

// Clear errors when resetting the form
form.addEventListener("reset", function () {
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    result.textContent = "";
});