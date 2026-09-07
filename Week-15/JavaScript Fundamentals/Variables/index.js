// Var function scoped
// can be redeclared and reassigned
var name = "Tarak";
console.log(name);

var name = "Gupta";//redeclaared
console.log(name);

// Let block scoped
// can be reassigned
// cannot be redeclared in the same scope
let age = 23;
console.log(age);

age=24;
console.log(age);

// const block scoped
// cannot be reassigned
// must be initialized during declaration
const country = "India";
console.log(country);
