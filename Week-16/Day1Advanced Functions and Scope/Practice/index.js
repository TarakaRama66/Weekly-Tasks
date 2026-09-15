//Global scope
const libraryName = "Smart Library";
console.log("Library Name:", libraryName);
//function declaration 
function calculateFine(daysLate) {
    return daysLate * 10;
}
console.log("Fine:", calculateFine(5));
//function expression 
const issueBook = function(bookName) {
    return `${bookName} issued successfully`;
};
console.log(issueBook("JavaScript Guide"));
//arrow function 
const bookStatus = copies =>
    copies > 0 ? "Available" : "Out of Stock";
console.log(bookStatus(3));
//default parameters 
function addMember(name, plan = "Regular") {
    return `${name} joined as ${plan} member`;
}
console.log(addMember("TarakGupta"));
//rest parameters 
function totalBooks(...books) {
    return books.length;
}
console.log("Total Books:", totalBooks("HTML","CSS","JavaScript","React"));
//callbak function 
function processMember(name, callback) {
    callback(name);
}
processMember("Siddu", function(name) {
    console.log(name, "borrowed a book");
});
//higher order function 
function category(type) {
    return function(book) {
        return `${book} belongs to ${type}`;
    };
}
const programmingBook =
    category("Programming");
console.log(programmingBook("JavaScript"));
//local scope 
function readingRoom() {
    let seats = 50;
    return seats;
}
console.log("Reading Room Seats:",readingRoom());
//block scope 
{
    let librarian = "Tilak";
    console.log("Block Scope:",librarian);
}
//var 
function varExample() {
    if (true) {
        var books = 100;
    }
    return books;
}
console.log("Books:",varExample());
//hoisting 
console.log(welcome());
function welcome() {
    return "Welcome to Library";
}
//iife 
(function() {
    console.log("Library System Started");
})();
//closure 
function visitorCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = visitorCounter();
console.log(counter());
console.log(counter());
console.log(counter());
//recursion 
function countdown(number) {
    if (number === 0) {
        return "Open Library";
    }
    return number + " -> " + countdown(number - 1);
}
console.log(countdown(5));
//advance closure 
function fineTracker() {
    let totalFine = 0;
    return function(amount) {
        totalFine += amount;
        return totalFine;
    };
}
const fines = fineTracker();
console.log(fines(100));
console.log(fines(50));
console.log(fines(150));
 
//nested function 
function librarySection() {
    let section = "Programming";
    function getSection() {
        return section;
    }
    return getSection();
}
console.log(librarySection());