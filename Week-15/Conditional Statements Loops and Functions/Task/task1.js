let studentName = "Gupta";
let marks = 78;
let subjects = ["HTML", "CSS", "JavaScript", "React"];
 
// Conditional Statement
let status = marks >= 40 ? "Passed" : "Failed";
 
console.log(`${studentName} has ${status}`);
 
// Loop
for (let subject of subjects) {
  console.log("Subject:", subject);
}
 
// Function Declaration
function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 75) return "B";
  else if (score >= 50) return "C";
  return "D";
}
 
console.log("Grade:", calculateGrade(marks));
 
// Arrow Function
const greetStudent = (name) => {
  console.log(`Welcome ${name}`);
};
 
greetStudent(studentName);
 
// Callback Function
function displayResult(callback) {
  callback();
}
 
displayResult(() => {
  console.log("Result Published Successfully");
});
 