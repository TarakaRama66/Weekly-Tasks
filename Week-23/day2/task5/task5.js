const output = document.getElementById("output");
//constructor function
function Employee(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
}
// Creating objects
function constructorExample() {
    let emp1 = new Employee(
        101, "Rahul", "Frontend", 30000
    );
    let emp2 = new Employee(
        102, "Kiran", "Backend", 40000
    );
    output.textContent =
        "CONSTRUCTOR FUNCTION\n\n" +
        JSON.stringify(emp1, null, 2) +
        "\n\n" +
        JSON.stringify(emp2, null, 2);
}
//reusable methods using prototype
Employee.prototype.displayDetails = function () {
    return `
ID: ${this.id}
Name: ${this.name}
Department: ${this.department}
Salary: ${this.salary}
`;
};
Employee.prototype.getBonus = function () {
    return this.salary * 0.10;
};
function prototypeMethodExample() {
    let emp = new Employee(
        103, "Arjun", "Testing", 35000
    );
    output.textContent =
        "REUSABLE METHODS\n\n" +
        emp.displayDetails() +
        "\nBonus: " + emp.getBonus();
}
//es6 class
class Student {
    constructor(id, name, course, marks) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.marks = marks;
    }
    displayDetails() {
        return `
ID: ${this.id}
Name: ${this.name}
Course: ${this.course}
Marks: ${this.marks}
`;
    }
    calculateResult() {
        return this.marks >= 40
            ? "Pass"
            : "Fail";
    }
}
function classExample() {
    let student1 = new Student(
        1, "Priya", "JavaScript", 85
    );
    output.textContent =
        "ES6 CLASS EXAMPLE\n\n" +
        student1.displayDetails() +
        "\nResult: " +
        student1.calculateResult();
}
//multiple objects 
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        return `
Product ID: ${this.id}
Product Name: ${this.name}
Price: ${this.price}
`;
    }
}
function multipleObjects() {
    let product1 = new Product(
        101, "Laptop", 50000
    );
    let product2 = new Product(
        102, "Mobile", 20000
    );
    let product3 = new Product(
        103, "Keyboard", 1500
    );
    output.textContent =
        "MULTIPLE OBJECTS USING CLASS\n\n" +
        product1.displayProduct() +
        "\n" +
        product2.displayProduct() +
        "\n" +
        product3.displayProduct();
}
//comparison
function compareExample() {
    let emp = new Employee(
        104, "Sneha", "HR", 45000
    );
    let student = new Student(
        2, "Ravi", "React", 90
    );
    output.textContent =
        "CONSTRUCTOR FUNCTION\n\n" +
        emp.displayDetails() +

        "\n\nES6 CLASS\n\n" +
        student.displayDetails();
}