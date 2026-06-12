let courses = [
    "JavaScript",
    "Python",
    "Java",
    "JavaScript",
    "React"
];

// Check if the course is available or not
console.log("Is React available?");
console.log(courses.includes("React"));

// Find first
console.log("\nFirst JavaScript Position:");
console.log(courses.indexOf("JavaScript"));

// Find last
console.log("\nLast JavaScript Position:");
console.log(courses.lastIndexOf("JavaScript"));

// Search for a course that doesn't exist
let searchCourse = "Node.js";

if (courses.includes(searchCourse)) {
    console.log(`\n${searchCourse} found at index ${courses.indexOf(searchCourse)}`);
} else {
    console.log(`\n${searchCourse} is not available`);
}