
const output = document.getElementById("output");
const fetchBtn = document.getElementById("fetchBtn");
const errorBtn = document.getElementById("errorBtn");
const clearBtn = document.getElementById("clearBtn");

// Display messages in the UI
function showMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

// Simulate an asynchronous API request
function getStudent(shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Unable to fetch student data."));
                return;
            }

            resolve({
                id: 101,
                name: "Taraka Ram",
                course: "JavaScript",
                score: 90
            });
        }, 1500);
    });
}

// Convert Promise-based logic into async/await
async function fetchStudentData(shouldFail = false) {
    output.innerHTML = "";
    fetchBtn.disabled = true;
    errorBtn.disabled = true;

    showMessage("Loading student data...");

    try {
        const student = await getStudent(shouldFail);

        showMessage("Student data fetched successfully!");
        showMessage("Student ID: " + student.id);
        showMessage("Student Name: " + student.name);
        showMessage("Course: " + student.course);
        showMessage("Score: " + student.score);
    } catch (error) {
        showMessage("Error: " + error.message);
    } finally {
        showMessage("Request completed.");
        fetchBtn.disabled = false;
        errorBtn.disabled = false;
    }
}

// Fetch data successfully
fetchBtn.addEventListener("click", () => {
    fetchStudentData(false);
});

// Test error handling
errorBtn.addEventListener("click", () => {
    fetchStudentData(true);
});

// Clear output
clearBtn.addEventListener("click", () => {
    output.innerHTML = "";
});
