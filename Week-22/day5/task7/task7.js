// Creating a Set to store unique student IDs
const studentIds = new Set();

// Creating a Map to store student information
const students = new Map();


// HTML Elements
const output = document.getElementById("output");
const setOutput = document.getElementById("setOutput");


// Add Student
document.getElementById("addBtn").addEventListener("click", function () {

    const id = Number(document.getElementById("studentId").value);

    const name = document.getElementById("studentName").value.trim();

    const course = document.getElementById("course").value.trim();


    // Validation
    if (!Number.isInteger(id) || id <= 0 || !name || !course) {

        alert("Please enter valid student details.");

        return;

    }


    // Check duplicate ID using Set
    if (studentIds.has(id)) {

        alert("Student ID already exists.");

        return;

    }


    // Add ID to Set
    studentIds.add(id);


    // Add student details to Map
    students.set(id, {
        name: name,
        course: course
    });


    alert("Student added successfully.");

    displayStudents();

});


// Display Students
function displayStudents() {

    output.innerHTML = "";

    if (students.size === 0) {

        output.textContent = "No students available.";

        return;

    }


    students.forEach(function (student, id) {

        const div = document.createElement("div");

        const details = document.createElement("p");

        details.textContent =
            "ID: " + id +
            " | Name: " + student.name +
            " | Course: " + student.course;

        div.appendChild(details);

        output.appendChild(div);

    });


    // Display Set
    setOutput.textContent =
        Array.from(studentIds).join(", ");

}


// Search Student using Map
document.getElementById("searchBtn").addEventListener("click", function () {

    const id = Number(document.getElementById("searchId").value);


    if (students.has(id)) {

        const student = students.get(id);

        alert(
            "Student Found!\n" +
            "ID: " + id +
            "\nName: " + student.name +
            "\nCourse: " + student.course
        );

    } else {

        alert("Student not found.");

    }

});


// Delete Student
document.getElementById("deleteBtn").addEventListener("click", function () {

    const id = Number(document.getElementById("deleteId").value);


    if (students.has(id)) {

        // Delete from Map
        students.delete(id);

        // Delete from Set
        studentIds.delete(id);

        alert("Student deleted successfully.");

        displayStudents();

    } else {

        alert("Student not found.");

    }

});


// Initial Display
displayStudents();
