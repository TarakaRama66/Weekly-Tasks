// var, let, const
var companyName = "Tech Solutions";
 
let employeeName = "Gupta";
let basicSalary = 30000;
let bonus = 5000;
 
const taxPercentage = 10;
 
// Primitive Data Types
let isPermanent = true;
let department = "Development";
let experience = 2;
 
// Reference Data Type (Object)
let employee = {
  id: 101,
  city: "Hyderabad"
};
 
// Arithmetic Operators
let grossSalary = basicSalary + bonus;
 
// Assignment Operator
grossSalary += 2000; // Extra allowance
 
// Tax Calculation
let taxAmount = (grossSalary * taxPercentage) / 100;
let netSalary = grossSalary - taxAmount;
 
// Comparison Operators
let eligibleForPromotion = experience >= 2;
let highSalary = netSalary > 30000;
 
// Logical Operators
let canGetPromotion =
  eligibleForPromotion && isPermanent;
 
// Type Conversion
let joiningYear = "2022";
let year = Number(joiningYear);
 
console.log(year + 2); // 2024
 
// Type Coercion
console.log("Salary: " + netSalary);
 
// typeof Operator
console.log(typeof employeeName);
console.log(typeof basicSalary);
console.log(typeof isPermanent);
console.log(typeof employee);
 
// Template Literals
console.log(`
Company: ${companyName}
Employee Name: ${employeeName}
Department: ${department}
City: ${employee.city}
Experience: ${experience} years
Gross Salary: ₹${grossSalary}
Tax Amount: ₹${taxAmount}
Net Salary: ₹${netSalary}
Promotion Eligible: ${canGetPromotion}
`);
 