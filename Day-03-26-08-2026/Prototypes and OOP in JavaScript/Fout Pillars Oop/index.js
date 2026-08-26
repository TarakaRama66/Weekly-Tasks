// Encapsulation
// Combining data and methods into one unit
class BankAccount {
  constructor(balance) {this.balance = balance;}
  deposit(amount) {this.balance += amount;}
  getBalance() {return this.balance;
  }
}
const acc = new BankAccount(1000);
acc.deposit(500);
console.log("\n*Encapsulation");
console.log(acc.getBalance());

// Inheritance
//One class can inherit properties and methods from another class
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("\n*Inheritance");
    console.log(`Hello ${this.name}`);
  }
}
class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}
const s1 = new Student("Gupta", "React");
s1.greet();
s1.study();

// Polymorphism
//Same method behaves differently
class Animal {
  sound() {
    console.log("Animal sound");
  }
}
class Dog extends Animal {
  sound() {
    console.log("\n*Polymorphism");
    console.log("Bark");
  }
}
class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}
const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();

// Abstraction
// Showing only necessary details and hiding implementation
class Car {
  start() {
    this.#engineStart();
    console.log("\n*Abstraction");
    console.log("Car Started");
  }
  #engineStart() {
    console.log("Engine Started");
  }
}
const car = new Car();
car.start();