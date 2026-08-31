// Duplicate Numbers
const numbers = [10, 20, 30, 20, 40, 10, 50, 30];

console.log("Original Numbers:");
console.log(numbers);

// Remove duplicates using Set
const uniqueNumbers = [...new Set(numbers)];

console.log("\nUnique Numbers:");
console.log(uniqueNumbers);
//duplicate Names
const students = [
  "Tarak",
  "Priya",
  "Ram",
  "Tarak",
  "Tilak",
  "Gupta",
  "Ram"
];

console.log("\nOriginal Students:");
console.log(students);

const uniqueStudents = [...new Set(students)];

console.log("\nUnique Students:");
console.log(uniqueStudents);
//duplicate employees
const employees = [
  { id: 1, name: "Johny", department: "IT" },
  { id: 2, name: "Kiran", department: "HR" },
  { id: 1, name: "Dileep", department: "IT" },
  { id: 3, name: "Siddu", department: "Finance" },
  { id: 2, name: "Durga", department: "HR" }
];

console.log("\nOriginal Employees:");
console.log(employees);

// Remove duplicate objects using filter + findIndex
const uniqueEmployees = employees.filter(
  (employee, index, array) =>
    index === array.findIndex(
      emp => emp.id === employee.id
    )
);

console.log("\nUnique Employees:");
console.log(uniqueEmployees);
//Total unique employees
console.log(
  "\nTotal Unique Employees:",
  uniqueEmployees.length
);

// Employee Names
const employeeNames = uniqueEmployees.map(
  emp => emp.name
);

console.log("\nEmployee Names:");
console.log(employeeNames);

// Join Names
console.log(
  "\nEmployee Names String:"
);

console.log(employeeNames.join(", "));