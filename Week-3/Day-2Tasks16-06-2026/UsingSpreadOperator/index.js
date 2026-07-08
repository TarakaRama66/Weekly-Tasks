//Using Spread Operator
const original = {
  name: "Tarak",
  age: 25
};

const copy = { ...original };

copy.age = 23;

console.log(original);
console.log(copy); 
// Creates a new object.
// Copies all enumerable own properties from original into the new object.
// Only the first level is copied (shallow copy).

// Using Object.assign()
const original1 = {
  name: "Gupta",
  age: 25
};

const OAcopy = Object.assign({}, original1);

OAcopy.age = 23;

console.log(original1);
console.log(OAcopy);

// The first argument ({}) is the target object.
// Properties from original are copied into the target.
// Produces a shallow copy.