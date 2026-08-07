"use strict";

const person1 = {
  name: "Tarak",
  city: "Hyderabad"
};

const person2 = {
  name: "Gupta",
  city: "Bangalore"
};

function introduce(country, profession) {
  console.log(
    `Hi, I'm ${this.name} from ${this.city}, ${country}. I work as a ${profession}.`
  );
}

// call()
console.log("\ncall()");

// Arguments passed individually
introduce.call(person1, "India", "Developer");
introduce.call(person2, "India", "Designer");

// apply()
console.log("\napply()");

// Arguments passed as an array
introduce.apply(person1, ["India", "Software Engineer"]);
introduce.apply(person2, ["India", "UI Designer"]);

// bind()
console.log("\nbind()");

// Returns a new function with fixed this
const TarakIntro = introduce.bind(
  person1,
  "India",
  "Frontend Developer"
);

const GuptaIntro = introduce.bind(
  person2,
  "India",
  "Backend Developer"
);

// Execute later
TarakIntro();
GuptaIntro();
