// Object methods
const student = {
  name: "Gupta",
  course: "React",

  study() {
    console.log("\n*Object Methods")
    console.log(`${this.name} is studying ${this.course}`);
  }
};

student.study();

// Class Methods
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("\n*Class Methods")
    console.log(`Hello ${this.name}`);}
}
const user = new User("Gupta");
user.greet();

// Instance method
// Available to every object created from a class
class Employee {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log("\n*Instance Method")
    console.log(`${this.name} is working`);
  }
}
const emp = new Employee("Gupta");
emp.work();

// Static Methods
//Belong to the class itself not the object
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
console.log("\n*Static method")
console.log(MathUtils.add(10, 20));

// Getter method
// It is Used to read values like properties
class User1 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
const users = new User1("Tarak");
console.log("\n*Getter method");
console.log(users.name);

// Setter Methods
// Used to update values
class User2 {
  constructor(name) {
    this._name = name;
  }

  set name(value) {
    this._name = value;
  }
}
const user2 = new User2("Gupta");
user2.name = "TarakRam";
console.log(user2);

