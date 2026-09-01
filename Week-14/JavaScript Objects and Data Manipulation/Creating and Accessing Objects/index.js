const employee = {
  id: 101,
  name: "Gupta",
  designation: "Frontend Developer",
  salary: 60000,
  skills: ["HTML", "CSS", "JavaScript", "React"]
};

// Accessing
console.log(employee.name);
console.log(employee.skills[3]);

// Updating
employee.salary = 70000;

// Adding
employee.experience = "3 Years";

// Deleting
delete employee.designation;

console.log(employee);