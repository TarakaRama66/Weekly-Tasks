// Reference Copy(Not a real copy)
const original = {
  name: "Tarak",
  age: 25
};

const copy = original;

copy.age = 30;

console.log(original.age);
console.log(copy.age);    

// Shallow Copy with spread operator
const original1 = {
  name: "Siddu",
  age: 25
};

const Shcopy = { ...original };

Shcopy.age = 30;

console.log(original1.age);
console.log(Shcopy.age);     

// Shallow Copy with Object.assign
const original2 = {
  name: "Tilak",
  age: 25
};

const Obcopy = Object.assign({}, original2);

Obcopy.age = 30;

console.log(original2.age);
console.log(Obcopy.age);

// Deep Copy with structuredClone()
const original3 = {
  name: "Gupta",
  address: {
    city: "Delhi"
  }
};

const Deepcopy = structuredClone(original3);

Deepcopy.address.city = "Hyderbad";

console.log(original3.address.city);
console.log(Deepcopy.address.city);

// Deep Copy Using JSON Methods
const original4 = {
  name: "TarakRam",
  address: {
    city: "Vijayawada"
  }
};

const Jsoncopy = JSON.parse(JSON.stringify(original4));

Jsoncopy.address.city = "Hyderbad";

console.log(original4.address.city);
console.log(Jsoncopy.address.city); 