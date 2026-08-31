const employees = [
  { id: 1, name: "John", salary: 50000, department: "IT" },
  { id: 2, name: "Emma", salary: 65000, department: "HR" },
  { id: 3, name: "David", salary: 70000, department: "IT" },
  { id: 4, name: "Sophia", salary: 45000, department: "Finance" }
];
console.log("\nEmployee Management System");
console.log("Original Employees:");
console.log(employees);
//push() add one or more elements to the end of an array
employees.push({
  id: 5,
  name: "Mike",
  salary: 55000,
  department: "IT"
});

console.log("\nAfter push():");
console.log(employees);
//pop() removes and returns the last element from an array
const removedEmployee = employees.pop();

console.log("\nRemoved Employee:");
console.log(removedEmployee);
//unshift add one or more elements to the beginning of an array
employees.unshift({
  id: 0,
  name: "Admin",
  salary: 100000,
  department: "Management"
});
//shift() removes and returns the first element from an array
employees.shift();
//include() checks whether an specific value and it returns true or false
const departments = ["IT", "HR", "Finance"];

console.log("\nDepartment Exists:");
console.log(departments.includes("HR"));
//indexof() first occurrence value and value not found it returns -1
console.log("\nIndex Of HR:");
console.log(departments.indexOf("HR"));
//map() creates a new array by transforming each element of the original array
const employeeNames = employees.map(
  emp => emp.name
);

console.log("\nEmployee Names:");
console.log(employeeNames);
//filter() It satisfy the given condition
const highSalaryEmployees = employees.filter(
  emp => emp.salary > 55000
);

console.log("\nHigh Salary Employees:");
console.log(highSalaryEmployees);
//find() It returns the first element that matches a condition
const employee = employees.find(
  emp => emp.id === 3
);

console.log("\nEmployee ID 3:");
console.log(employee);
//some() It returns true if at least one element satisfies a condition
const hasFinance = employees.some(
  emp => emp.department === "Finance"
);

console.log("\nFinance Department Exists:");
console.log(hasFinance);
//every() It Returns true if all elements satisfy a condition
const allAbove40k = employees.every(
  emp => emp.salary > 40000
);

console.log("\nAll Employees Salary > 40k:");
console.log(allAbove40k);
//reduce() Reduces an array to a single value (sum, total, object,etc)
const totalSalary = employees.reduce(
  (sum, emp) => sum + emp.salary,
  0
);

console.log("\nTotal Salary:");
console.log(totalSalary);
//slice() It returns a shallow copy of a portion of an array without modifying the original array
const firstTwoEmployees = employees.slice(0, 2);

console.log("\nFirst Two Employees:");
console.log(firstTwoEmployees);
//splice() Add, remove, or replace elements in an array by modifying the original array
employees.splice(
  1,
  1,
  {
    id: 6,
    name: "Robert",
    salary: 80000,
    department: "Sales"
  }
);

console.log("\nAfter splice():");
console.log(employees);
// Sort() Sorts the elements of an array in place
employees.sort(
  (a, b) => a.salary - b.salary
);

console.log("\nSorted By Salary:");
console.log(employees);
// reverse() Reverses the order of elements
employees.reverse();

console.log("\nReverse Order:");
console.log(employees);
//forEach() Executes a function once for each array element
console.log("\nEmployee Details:");

employees.forEach(emp => {
  console.log(
    `${emp.name} - ${emp.department} - ₹${emp.salary}`
  );
});
// Join() Convert array to string
const namesString = employeeNames.join(", ");

console.log("\nEmployee Names String:");
console.log(namesString);