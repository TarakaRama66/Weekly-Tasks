import findStudentById, {addStudent,getStudents,calculateAverage} from "./student.js";

import {displayStudents,displayMessage} from "./display.js";

const nameInput = document.getElementById("studentName");
const marksInput = document.getElementById("studentMarks");
const output = document.getElementById("output");

const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const clearBtn = document.getElementById("clearBtn");

// Add a new student
addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const marksText = marksInput.value;

    if (!name || marksText === "") {
        output.textContent = "Please enter the name and marks.";
        return;
    }

    const marks = Number(marksText);

    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
        output.textContent = "Marks must be between 0 and 100.";
        return;
    }

    const student = addStudent(name, marks);

    output.innerHTML = "";
    displayMessage(
        student.name + " added successfully.",
        output
    );

    nameInput.value = "";
    marksInput.value = "";
});

// Display all students and calculate average
showBtn.addEventListener("click", () => {
    const students = getStudents();

    displayStudents(students, output);

    const average = calculateAverage();
    displayMessage("Average Marks: " + average.toFixed(2), output);

    const firstStudent = students[0];

    if (firstStudent) {
        const foundStudent = findStudentById(firstStudent.id);

        if (foundStudent) {
            displayMessage(
                "Found Student: " + foundStudent.name,
                output
            );
        }
    }
});

// Clear output
clearBtn.addEventListener("click", () => {
    output.innerHTML = "";
});