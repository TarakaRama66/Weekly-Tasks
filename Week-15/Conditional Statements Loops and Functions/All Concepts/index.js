console.log("\nTruthy and Falsy Values");
let username ="Gupta";
if (username){
    console.log("Username exists");
}else{
    console.log("Username is empty");
}
let value = 0;//falsy
console.log(Boolean(value));//false

// Truthy values treated as true
// Falsy values false,0,null,undefined,"",NaN

console.log("\nConditional Statements");
// if statement
let age = 24;
if (age>=18){
    console.log("He is Eligible for Vote");
}

// if else
let marks = 35;
if(marks>=40){
    console.log("pass");
}else{
    console.log("Fail");
}

// else if
let score = 85;
if(score>=90){
    console.log("GradeA");
}else if(score>=75){
    console.log("GradeB");
}else if(score>=55){
    console.log("GradeC");
}else{
    console.log("GradeD");
}

// Nested conditions
let userAge = 24;
let License = true;
if(userAge>=18){
    if(License){
        console.log("Can Drive");
    }else{
        console.log("Need a License");
    }
}else{
    console.log("He is too young to drive");
}

// Switch and break Statement
let day = 4;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

// Ternary Operator
let number = 20;
let result = number%2===0?"Even":"Odd";
console.log(result);

// Loops
console.log("\nLoops")
// for loop
for (let i=5;i<=10;i++){
    console.log("for loop:",i);
}

// while loop
let count = 1;
while (count<=5){
    console.log("While loop:",count);
    count++;
}

// do while loop
let num = 1;
do{
    console.log("Do while:",num);
    num++;
}while (num<=5);

// for in loop
let student ={
    name: "Tarak Gupta", age: 24,city:"Palakollu"
};
for (let key in student){
    console.log(key,":",student[key]);
}

// for of loop
let fruits = ["Apple","Banana","Mango","Grapes"];
for(let fruit of fruits){
    console.log(fruit);
}

// Functions
console.log("\nFunctions");
// Function declaration
function greet(name){
    return `Hello ${name}`
}
console.log(greet("Tarak"));

// Function Expression
const multiply = function(a,b){
    return a*b;
};
console.log(multiply(5,5));

// Arrow Function
const square = (n)=>n*n;
console.log(square(6));

// Parameters and Arguments
function add(a,b){//parameters
    return a+b;
}
console.log(add(20,20));//arguments

// Default Parameters
function welcome(name="Guest"){
    return `welcome ${name}`;
}
console.log(welcome());
console.log(welcome("Gupta"));

// Rest Parameters
function total(...numbers){
    return numbers.reduce((sum,num)=>sum+num,0);
}
console.log(total(10,20,30,40,20));

// Arguments Objects
function showArguments(){
    console.log(arguments);
}
showArguments("JavaScript",2026,true,"Tarak");

// Recursive Function
function factorial(n){
    if (n===1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));

// Callback function
function processUser(name,callback){
    console.log("Processing:",name);
}
function completed(){
    console.log("Process Completed")
}
processUser("TarakGupta", completed);