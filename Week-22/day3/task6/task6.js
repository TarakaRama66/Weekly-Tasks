const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate name
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters.";
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === "") {
        confirmPasswordError.textContent =
            "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent =
            "Passwords do not match.";
        isValid = false;
    }

    // Display result
    if (isValid) {
        successMessage.textContent =
            "Registration form submitted successfully!";

        form.reset();
    }
});

// Clear validation messages when the form is reset
form.addEventListener("reset", function () {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";
});