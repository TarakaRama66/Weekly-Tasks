// Basic Syntax
const person={
    name: "Tarak",
    age: 24,
    city:"Palakollu"
};
const {name, age} = person;
console.log(name);
console.log(age);

// Renaming Variables
const person1={
    name:"Gupta",
    age:24
};
const {name:Fullname,age:years}=person1;
console.log("\nRenaming Variables");
console.log(Fullname);
console.log(years);

// Default Values
const user={
    name1:"Tilak"
};
const {name1, age1=20}= user;
console.log("\nDefault Values");
console.log(name1);
console.log(age1);

// Nested Object Destructuring
const student={
    name:"Siddu",
    address:{
        city:"Hyderabad",
        pincode:"534260"
    }
};
const {
    address:{city,pincode}}=student;
    console.log("\nNested Object Destructuring")
    console.log(city);
    console.log(pincode);