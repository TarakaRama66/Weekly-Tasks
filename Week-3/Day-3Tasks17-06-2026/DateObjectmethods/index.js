// Create a date object
let today = new Date();

console.log(today);

// getfullyear()
let date = new Date();

console.log(date.getFullYear());

//getmonth()
let date1 = new Date();

console.log(date1.getMonth());
// Returns the month (0-11).

// getdate()
let date2 = new Date();

console.log(date2.getDate());

// getday()
let date3 = new Date();

console.log(date3.getDay());
// Returns the weekday (0-6)

// gethours()
let date4 = new Date();

console.log(date4.getHours());

// getminutes()
let date5 = new Date();

console.log(date5.getMinutes());

// getseconds
let date6 = new Date();

console.log(date6.getSeconds());

// setfullyear()
let date7 = new Date();

date7.setFullYear(2027);

console.log(date7);

// setmonth()
let date8 = new Date();

date8.setMonth(10);

console.log(date8);

// setDate()
let date9 = new Date();

date9.setDate(6);

console.log(date9);

// to datestring()
let date10 = new Date();

console.log(date10.toDateString());

// to timestring()
let date11 = new Date();

console.log(date11.toTimeString());

//toLocaleDateString
let date12 = new Date();

console.log(date12.toLocaleDateString());

//toLocaleTimeString
let date13 = new Date();

console.log(date13.toLocaleTimeString());

// Age Calculator
let birthYear = 2002;
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("Age:", age);