// Variables(Temporary Storage)
let name = "Gupta";
console.log(name);

// localStorage(Permanent Storage)
// localStorage stores data permanently in the browser until it is manually removed.
localStorage.setItem("username", "Gupta");

let user = localStorage.getItem("username");

console.log(user);

// sessionStorage stores data only for the current browser session.
sessionStorage.setItem("course", "JavaScript");

let course = sessionStorage.getItem("course");

console.log(course);


// Arrays store multiple values in a single variable
let Cars = ["BMW", "Audi", "benz"];

console.log(Cars);

// Objects store data as key-value pairs.
let student = {
    name: "Gupta",
    age: 22,
    course: "JavaScript"
};

console.log(student.name);



// Variables → It Stores data Temporary.
// Arrays → It Store multiple values.
// Objects → It can only Store key-value pairs.
// localStorage → Persistent browser storage.
// sessionStorage → Temporary browser session storage.