"use strict";

// IIFE
(function () {
    console.log("Application Started");
})();

let students = [
    { id: 1, name: "Gupta", marks: 85 },
    { id: 2, name: "Siddu", marks: 72 },
    { id: 3, name: "venu", marks: 91 },
    { id: 4, name: "Koushik", marks: 68 },
    { id: 5, name: "Harsha", marks:34},
    { id: 6, name: "Chintu", marks:25},
    { id: 6, name: "Sanju", marks:33}
];

// Ternary Operator
function getResult(marks) {
    return marks >= 35 ? "Pass" : "Fail";
}

// Display Students
function displayStudents() {

    const tbody = document.querySelector("#studentTable tbody");

    students.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.marks}</td>
            <td class="${student.marks >= 35 ? "pass" : "fail"}">
                ${getResult(student.marks)}
            </td>
        `;
        tbody.appendChild(row);
    });
}

displayStudents();

// Recursion
function countStudents(array, index = 0) {
    if (index === array.length) {
        return 0;
    }
    return 1 + countStudents(array, index + 1);
}

// Reduce
const totalStudentMarks = students.reduce(
    (sum, student) => sum + student.marks,
    0
);

// Filter
const toppers = students.filter(
    student => student.marks >= 80
);

// Display Statistics
document.getElementById("totalStudents").innerHTML =
    `<b>Total Students:</b> ${countStudents(students)}`;

document.getElementById("totalMarks").innerHTML =
    `<b>Total Marks:</b> ${totalStudentMarks}`;

document.getElementById("toppers").innerHTML =
    `<b>Toppers:</b> ${toppers.map(s => s.name).join(", ")}`;