const students = [];

const form = document.getElementById("studentForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();

    const marks = [
        Number(document.getElementById("mark1").value),
        Number(document.getElementById("mark2").value),
        Number(document.getElementById("mark3").value),
        Number(document.getElementById("mark4").value),
        Number(document.getElementById("mark5").value)
    ];

    // Validate student details
    if (!name || !roll) {
        alert("Please enter the student name and roll number.");
        return;
    }

    if (students.some(student => student.roll === roll)) {
        alert("This roll number already exists.");
        return;
    }

    if (marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
        alert("Each mark must be between 0 and 100.");
        return;
    }

    // Calculate total and percentage
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / marks.length;

    // Determine pass/fail
    // A student must score at least 35 in every subject.
    const passed = marks.every(mark => mark >= 35);

    // Determine grade
    let grade;

    if (!passed) {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Store student as an object in the array
    const student = {
        name,
        roll,
        marks,
        total,
        percentage,
        grade,
        status: passed ? "PASS" : "FAIL"
    };

    students.push(student);

    form.reset();
    displayResults();
});

function displayResults() {
    if (students.length === 0) {
        output.textContent = "No student results available.";
        return;
    }

    let result = "";

    for (const student of students) {
        result +=
            `Student Name: ${student.name}\n` +
            `Roll Number: ${student.roll}\n` +
            `Marks: ${student.marks.join(", ")}\n` +
            `Total: ${student.total}/500\n` +
            `Percentage: ${student.percentage.toFixed(2)}%\n` +
            `Grade: ${student.grade}\n` +
            `Status: ${student.status}\n` +
            `${"-".repeat(35)}\n`;
    }

    result += `Total Students: ${students.length}`;

    output.textContent = result;
}

function clearResults() {
    students.length = 0;
    output.textContent = "All student results cleared.";
}
