// OBJECTS
// Creating Objects
console.log("\n Objects");
let gymMember = {
  name: "Tarak",
  age: 25,
  membership: "Gold"
};
console.log(gymMember);
 
// Accessing and Updating Properties
console.log(gymMember.name);
gymMember.age = 26;
gymMember.city = "Hyderabad";
console.log(gymMember);

// Nested Objects
let trainer = {
  name: "Soumya",
  experience: 5,
  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};
console.log(trainer.address.city);
 
// Object Methods
let user = {
  name: "Priya",
  greet() {
    return `Hello ${this.name}`;
  }
};
console.log(user.greet());
// Object.keys()
console.log(Object.keys(gymMember));
// Object.values()
console.log(Object.values(gymMember));
// Object.entries()
console.log(Object.entries(gymMember));
// OBJECT COPYING
// Shallow Copy
let original = {
  name: "TarakRam",
  age: 25
};
let shallowCopy = { ...original };
console.log(shallowCopy);
// Deep Copy
let employee = {
  name: "Siddu",
  details: {
    city: "Hyderabad"
  }
};
let deepCopy = structuredClone(employee);
deepCopy.details.city = "Mumbai";
console.log(employee.details.city);
console.log(deepCopy.details.city);