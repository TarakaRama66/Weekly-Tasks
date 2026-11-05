
const students = [
    {
        id: 1,
        name: "Rahul",
        department: "IT",
        marks: [85, 90, 80]
    },
    {
        id: 2,
        name: "Priya",
        department: "CSE",
        marks: [95, 92, 98]
    },
    {
        id: 3,
        name: "Kiran",
        department: "IT",
        marks: [45, 50, 40]
    },
    {
        id: 4,
        name: "Sneha",
        department: "ECE",
        marks: [75, 80, 85]
    },
    {
        id: 5,
        name: "Arjun",
        department: "CSE",
        marks: [90, 88, 92]
    }
];

const output = document.getElementById("output");

// Calculate student results
function calculateStudent(student) {

    const total = student.marks.reduce((sum, mark) => {
        return sum + mark;
    }, 0);

    const percentage = total / student.marks.length;

    return {
        ...student,
        total: total,
        percentage: percentage.toFixed(2),
        result: student.marks.every(mark => mark >= 40)
            ? "Pass"
            : "Fail"
    };
}

// Display all students
function displayStudents() {

    const result = students.map(calculateStudent);

    displayResult(result);
}

// Calculate results
function calculateResults() {

    const result = students.map(calculateStudent);

    displayResult(result);
}

// Filter passed students
function filterPassed() {

    const result = students
        .map(calculateStudent)
        .filter(student => student.result === "Pass");

    displayResult(result);
}

// Filter failed students
function filterFailed() {

    const result = students
        .map(calculateStudent)
        .filter(student => student.result === "Fail");

    displayResult(result);
}

// Find top performers
function topPerformers() {

    const result = students
        .map(calculateStudent)
        .filter(student => student.percentage >= 90);

    displayResult(result);
}

// Sort students by percentage
function sortStudents() {

    const result = students
        .map(calculateStudent)
        .sort((a, b) => b.percentage - a.percentage);

    displayResult(result);
}

// Generate summary report
function generateReport() {

    const result = students.map(calculateStudent);

    const totalStudents = result.length;

    const passed = result.filter(student =>
        student.result === "Pass"
    ).length;

    const failed = result.filter(student =>
        student.result === "Fail"
    ).length;

    const average = result.reduce((sum, student) => {
        return sum + Number(student.percentage);
    }, 0) / totalStudents;

    const topper = [...result].sort((a, b) =>
        b.percentage - a.percentage
    )[0];

    output.innerHTML = `
        <h3>Student Summary Report</h3>

        <p>Total Students: ${totalStudents}</p>
        <p>Passed Students: ${passed}</p>
        <p>Failed Students: ${failed}</p>
        <p>Class Average: ${average.toFixed(2)}%</p>

        <h3>Topper: ${topper.name}</h3>
        <p>Percentage: ${topper.percentage}%</p>
    `;
}

// Reusable display function
function displayResult(data) {

    output.innerHTML = data.map(student => `
        <hr>

        <h3>${student.name}</h3>

        <p>ID: ${student.id}</p>
        <p>Department: ${student.department}</p>
        <p>Marks: ${student.marks.join(", ")}</p>
        <p>Total: ${student.total}</p>
        <p>Percentage: ${student.percentage}%</p>
        <p>Result: ${student.result}</p>

    `).join("");
}
