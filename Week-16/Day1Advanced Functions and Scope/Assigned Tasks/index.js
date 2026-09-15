// Task
const gymMembers=[
    {name:"TarakGupta", fees:2000},
    {name:"Tilak", fees:2500},
    {name:"Ram", fees:1500}
];
function calculateRevenue(...members){
    return members.reduce((sum,member)=>sum+member.fees,0);
}
const totalRevenue = calculateRevenue(...gymMembers);
console.log(`Total Revenue:${totalRevenue}`);
console.log("\n1.Create examples using different types of functions");
// Function Declaration
//function created using the function keyword with a name
function addMember(name){
    return `${name} added successfully`;
}
// function expression
// function stored inside a variable
const removeMember = function(name){
    return `${name} removed successfully`;
}
//arrow function
//shorter syntax introduced in es6
const updateMember = name=>`${name} updated successfully`;
console.log(addMember("TarakGupta"));
console.log(removeMember("Tilak"));
console.log(updateMember("Ram"));

console.log("\n2.Convert Normal function to Arrow function");
// Normal function
function calculateBMI(weight,height){
    return weight/(height*height);
}
console.log(calculateBMI(78,1.78));
// Arrow function
const calculatorBMI = (weight,height)=>weight/(height*height);
console.log(calculatorBMI(78,1.78));

console.log("\n3.Functions Accepting other functions");
function processMember(memberName,action){
    action(memberName);
}
function welcomeMember(name){
    console.log(`welcome ${name}`);
}
processMember("TarakGupta",welcomeMember);

// Higher Order Function
// Accept functions as arguments, return functions
console.log("\n4.Higher Order Function");
function calculateFees(amount,operation){
    return operation(amount);
}
function applyDiscount(fee){
    return fee-500;
}
console.log(calculateFees(3000,applyDiscount));

// Callback function
console.log("\n5.Callback Function");
function registerMember(name,callback){
    console.log(`${name} registration completed`);
    callback();
}
function sendWelcomeMessage(){
    console.log("Welcome Email Sent");
}
registerMember("Tilak",sendWelcomeMessage);

// Different Types of scope
console.log("\n6.Different Types of scope");
let gymName = "SS Fitness";//global scope
function displayGym(){
    let trainer = "Siddu";//funtion scope
    if(true){
        let batch = "Morning";//block scope
        console.log(gymName);
        console.log(trainer);
        console.log(batch);
    }
}
displayGym();

// Var let and const
console.log("\n6.Diff of var let and const");
var memberCount = 40;
var memberCount = 50;
let trainerCount = 5;
const gymCode = "GYM123";
console.log(memberCount);
console.log(trainerCount);
console.log(gymCode);

// Hoisting
console.log("\n7.Create examples for hoisting");
// function hoisting
function showMessage(){
    console.log("Gym Opens Soon");
}
showMessage();
// Variable hoisting
var totalMembers = 100;
console.log("Total Members in Gym:",totalMembers);

// IIFE
console.log("\n8.Implement IIFE examples");
(function(){
    console.log("Gym Opens At 5.30 AM");
})();
//Arrow IIFE
(()=>{
    console.log("Daily Reports Generated");
})();