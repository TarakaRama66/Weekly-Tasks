
const studentNameInput = document.getElementById("studentName");
const enrollBtn = document.getElementById("enrollBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

// Display messages in the UI
function showMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

// Step 1: Register the student
function registerStudent(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name.trim() === "") {
                reject(new Error("Please enter a student name."));
                return;
            }

            showMessage("Step 1: Student registered successfully.");

            resolve({
                id: 101,
                name: name.trim()
            });
        }, 1000);
    });
}

// Step 2: Enroll the student in a course
function enrollCourse(student) {
    return new Promise((resolve) => {
        setTimeout(() => {
            showMessage("Step 2: Student enrolled in JavaScript.");

            resolve({
                ...student,
                course: "JavaScript"
            });
        }, 1000);
    });
}

// Step 3: Generate student certificate
function generateCertificate(student) {
    return new Promise((resolve) => {
        setTimeout(() => {
            showMessage("Step 3: Certificate generated.");

            resolve({
                ...student,
                certificate: "JS-CERT-101"
            });
        }, 1000);
    });
}

// Promise chaining
enrollBtn.addEventListener("click", () => {
    output.innerHTML = "";

    const name = studentNameInput.value;

    enrollBtn.disabled = true;

    showMessage("Enrollment process started...");

    registerStudent(name)
        .then((student) => {
            return enrollCourse(student);
        })
        .then((student) => {
            return generateCertificate(student);
        })
        .then((result) => {
            showMessage("Enrollment completed successfully!");
            showMessage("Student ID: " + result.id);
            showMessage("Student Name: " + result.name);
            showMessage("Course: " + result.course);
            showMessage("Certificate: " + result.certificate);
        })
        .catch((error) => {
            showMessage("Error: " + error.message);
        })
        .finally(() => {
            showMessage("Enrollment process finished.");
            enrollBtn.disabled = false;
        });
});

// Clear output
clearBtn.addEventListener("click", () => {
    output.innerHTML = "";
});