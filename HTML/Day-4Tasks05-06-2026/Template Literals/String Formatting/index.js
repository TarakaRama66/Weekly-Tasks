// using Template Literals
let name = "Gupta";
let age = 25;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

// Employee Details
let employeeName = "Tarak";
let designation = "Software Engineer";
let salary = 50000;

console.log(
  `Employee: ${employeeName}, Designation: ${designation}, Salary: ₹${salary}`
);

// formatting fullname
let firstName = "Kandula";
let lastName = "Gupta";

let fullName = `${firstName} ${lastName}`;

console.log(`Full Name: ${fullName}`);

// calculation
let price = 1000;
let quantity = 3;

console.log(`Total Amount: ₹${price * quantity}`);

// Multi-line String
let Name = "Gupta";
let city = "Hyderabad";

let profile = `
Name : ${name}
City : ${city}
Status : Active
`;

console.log(profile);

// Date formatting
let today = new Date();

console.log(`Current Date and Time: ${today}`);

