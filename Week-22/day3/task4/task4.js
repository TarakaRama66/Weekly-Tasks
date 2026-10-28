const clickBtn = document.getElementById("clickBtn");
const clickOutput = document.getElementById("clickOutput");

const nameInput = document.getElementById("nameInput");
const inputOutput = document.getElementById("inputOutput");

const course = document.getElementById("course");
const changeOutput = document.getElementById("changeOutput");

const myForm = document.getElementById("myForm");
const email = document.getElementById("email");
const submitOutput = document.getElementById("submitOutput");

const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

const mouseBox = document.getElementById("mouseBox");
const mouseOutput = document.getElementById("mouseOutput");
// 1. Click Event
clickBtn.addEventListener("click", function () {
    clickOutput.textContent = "Button clicked successfully!";
});
// 2. Input Event
nameInput.addEventListener("input", function () {
    inputOutput.textContent = "Your name: " + nameInput.value;
});
// 3. Change Event
course.addEventListener("change", function () {
    if (course.value === "") {
        changeOutput.textContent = "No course selected.";
    } else {
        changeOutput.textContent = "Selected course: " + course.value;
    }
});
// 4. Submit Event
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitOutput.textContent =
        "Form submitted successfully! Email: " + email.value;
});
// 5. Keyboard Event
keyInput.addEventListener("keydown", function (event) {
    keyOutput.textContent = "Key pressed: " + event.key;
});
// 6. Mouse Event
mouseBox.addEventListener("mouseenter", function () {
    mouseOutput.textContent = "Mouse entered the area!";
});
mouseBox.addEventListener("mouseleave", function () {
    mouseOutput.textContent = "Mouse left the area!";
});