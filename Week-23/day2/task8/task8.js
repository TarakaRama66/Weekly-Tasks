const output = document.getElementById("output");
//getter example
class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
}
function getterExample() {
    let emp = new Employee("Rahul", 30000);
    output.textContent =
        "GETTER EXAMPLE\n\n" +
        "Employee Name: " + emp.name +
        "\nEmployee Salary: " + emp.salary;
}
//setter example
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
}
function setterExample() {
    let product = new Product("Laptop", 50000);
    let oldPrice = product.price;
    product.price = 55000;
    output.textContent =
        "SETTER EXAMPLE\n\n" +
        "Product: " + product.name +
        "\nOld Price: " + oldPrice +
        "\nUpdated Price: " + product.price;
}
//setter with validation
class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    get balance() {
        return this.#balance;
    }
    set balance(newBalance) {
        if (newBalance >= 0) {
            this.#balance = newBalance;
        } else {
            throw new Error("Balance cannot be negative!");
        }
    }
}
function validationExample() {
    let account = new BankAccount(10000);
    try {
        account.balance = 15000;
        output.textContent =
            "SETTER VALIDATION\n\n" +
            "Updated Balance: " + account.balance;
    } catch (error) {
        output.textContent = error.message;
    }
}
//student example
class Student {
    #marks;
    constructor(name, marks) {
        this.name = name;
        this.#marks = marks;
    }
    get marks() {
        return this.#marks;
    }
    set marks(value) {
        if (value >= 0 && value <= 100) {
            this.#marks = value;
        } else {
            throw new Error("Marks must be between 0 and 100!");
        }
    }
    get result() {
        return this.#marks >= 40 ? "Pass" : "Fail";
    }
}
function studentExample() {
    let student = new Student("Priya", 85);
    student.marks = 90;
    output.textContent =
        "STUDENT GETTER AND SETTER\n\n" +
        "Student Name: " + student.name +
        "\nUpdated Marks: " + student.marks +
        "\nResult: " + student.result;
}
//employee example
class EmployeeDetails {
    #salary;
    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }
    get salary() {
        return this.#salary;
    }
    set salary(value) {
        if (value >= 10000) {
            this.#salary = value;
        } else {
            throw new Error("Minimum salary must be 10000!");
        }
    }
    get annualSalary() {
        return this.#salary * 12;
    }
}
function employeeExample() {
    let employee = new EmployeeDetails("Kiran", 30000);
    employee.salary = 40000;
    output.textContent =
        "EMPLOYEE DETAILS\n\n" +
        "Employee Name: " + employee.name +
        "\nMonthly Salary: " + employee.salary +
        "\nAnnual Salary: " + employee.annualSalary;
}