// prototype is an object that allows other objects to inherit properties and methods
function Employee(name, role, salary) {
  this.name = name;
  this.role = role;
  this.salary = salary;
}
Employee.prototype.getDetails = function () {
  return `${this.name} works as ${this.role}`;
};
Employee.prototype.incrementSalary = function (amount) {
  this.salary += amount;
};
Employee.prototype.displaySalary = function () {
  console.log(`Salary: ₹${this.salary}`);
};
const emp1 = new Employee("Gupta","Frontend Developer",40000);
const emp2 = new Employee("Tarak","Backend Developer",60000);

console.log(emp1.getDetails());
emp1.incrementSalary(10000);

emp1.displaySalary();
emp2.displaySalary();

const employee = {
  login() {
    console.log("\n*Prototype Chain");
    console.log(`${this.name} logged in`);
  }
};

const developer = Object.create(employee);

developer.code = function () {
  console.log(`${this.name} is Writing a code`);
};

const seniorDeveloper =
  Object.create(developer);

seniorDeveloper.name = "Gupta";

seniorDeveloper.login();
seniorDeveloper.code();

//A chain of linked prototype objects through which JavaScript performs property and method lookup

// __Proto__
const employee1 = {
  login() {
    console.log("\n*__Proto__")
    console.log(`${this.name} logged in`);
  }
};

const developer1 = {
  name: "Gupta"
};

developer1.__proto__ = employee1;

developer1.login();

// Constructor Function
// function used to create and initialize objects using the new keyword
function BankAccount(
  accountHolder,
  balance
) {
  this.accountHolder = accountHolder;
  this.balance = balance;
}
console.log("\n*Constructor Function")

BankAccount.prototype.deposit =
  function (amount) {
    this.balance += amount;
    console.log(`Deposited ₹${amount}`);
  };

BankAccount.prototype.withdraw =
  function (amount) {
    if (amount > this.balance) {
      console.log(
        "Insufficient Balance"
      );
      return;
    }

    this.balance -= amount;

    console.log(
      `Withdrawn ₹${amount}`
    );
  };

BankAccount.prototype.getBalance =
  function () {
    console.log(
      `Balance: ₹${this.balance}`
    );
  };

const account = new BankAccount(
  "Gupta",
  10000
);

account.deposit(5000);
account.withdraw(3000);
account.getBalance();