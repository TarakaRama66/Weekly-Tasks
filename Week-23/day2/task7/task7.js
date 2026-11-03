const output = document.getElementById("output");
//basic encapsulation
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    displayDetails() {
        return `
Employee Name: ${this.name}
Department: ${this.department}
`;
    }
}
function basicExample() {
    let emp = new Employee("Rahul", "Frontend");
    output.textContent =
        "BASIC ENCAPSULATION\n\n" +
        emp.displayDetails();
}
//private properties
class Student {
    #marks = 0;
    constructor(name, marks) {
        this.name = name;
        this.#marks = marks;
    }
    getMarks() {
        return this.#marks;
    }
    updateMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.#marks = marks;
            return "Marks updated successfully!";
        }
        return "Invalid marks! Enter between 0 and 100.";
    }
}
let student = new Student("Priya", 85);
function privateExample() {
    output.textContent =
        "PRIVATE PROPERTY EXAMPLE\n\n" +
        "Student Name: " + student.name +
        "\nMarks: " + student.getMarks() +
        "\nPrivate marks cannot be accessed directly.";
}
//deposit money
class BankAccount {
    #balance = 0;
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return "Deposit successful!";
        }
        return "Enter a valid deposit amount.";
    }
    getBalance() {
        return this.#balance;
    }
}
let account = new BankAccount("Rahul", 10000);
function depositExample() {
    let message = account.deposit(2000);
    output.textContent =
        "DEPOSIT MONEY\n\n" +
        message +
        "\nAccount Holder: " + account.accountHolder +
        "\nCurrent Balance: " + account.getBalance();
}
//withdraw money
class SavingsAccount {
    #balance = 0;
    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }
    withdraw(amount) {
        if (amount <= 0) {
            return "Enter a valid amount.";
        }
        if (amount > this.#balance) {
            return "Insufficient balance!";
        }
        this.#balance -= amount;
        return "Withdrawal successful!";
    }
    getBalance() {
        return this.#balance;
    }
}
let savings = new SavingsAccount("Kiran", 15000);
function withdrawExample() {
    let message = savings.withdraw(3000);
    output.textContent =
        "WITHDRAW MONEY\n\n" +
        message +
        "\nAccount Holder: " + savings.name +
        "\nRemaining Balance: " + savings.getBalance();
}
//reusable methods
class EmployeeManagement {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
    calculateBonus() {
        return this.salary * 0.10;
    }
    displayDetails() {
        return `
Employee Name: ${this.name}
Monthly Salary: ${this.salary}
Annual Salary: ${this.calculateAnnualSalary()}
Bonus: ${this.calculateBonus()}
`;
    }
}
let employee1 = new EmployeeManagement("Arjun", 30000);
let employee2 = new EmployeeManagement("Sneha", 40000);
function accountExample() {
    output.textContent =
        "REUSABLE CLASS METHODS\n\n" +
        employee1.displayDetails() +
        "\n" +
        employee2.displayDetails();
}