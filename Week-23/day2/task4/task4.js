const output = document.getElementById("output");
//  Constructor Function
function Employee(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
}
// Adding Method using Prototype
Employee.prototype.displayDetails = function () {
    return `ID: ${this.id}
Name: ${this.name}
Department: ${this.department}`;
};
// Another prototype method
Employee.prototype.greet = function () {
    return `Hello ${this.name}, Welcome to the company!`;
};
// Create Employee Objects
function createEmployee() {
    let emp1 = new Employee(101, "Rahul", "Frontend");
    let emp2 = new Employee(102, "Kiran", "Backend");
    output.textContent =
        "EMPLOYEE OBJECTS\n\n" +
        emp1.displayDetails() +
        "\n\n" +
        emp2.displayDetails();
}
// Prototype Method
function prototypeMethod() {
    let emp = new Employee(103, "Arjun", "Testing");
    output.textContent =
        "PROTOTYPE METHODS\n\n" +
        emp.displayDetails() +
        "\n\n" +
        emp.greet();
}
// Prototype-Based Inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function () {
    return `My name is ${this.name} and I am ${this.age} years old.`;
};
// Employee inherits from Person
function Developer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
}
// Connect Developer prototype to Person prototype
Developer.prototype = Object.create(Person.prototype);
// Restore constructor reference
Developer.prototype.constructor = Developer;
// Add Developer-specific method
Developer.prototype.showSkill = function () {
    return `${this.name} works with ${this.language}.`;
};
function inheritanceExample() {
    let dev = new Developer("Priya", 24, "JavaScript");
    output.textContent =
        "PROTOTYPE INHERITANCE\n\n" +
        dev.introduce() +
        "\n" +
        dev.showSkill();
}
// Object.create() Example
function objectCreateExample() {
    let person = {
        name: "Rahul",
        greet: function () {
            return `Hello, my name is ${this.name}`;
        }
    };
    let student = Object.create(person);
    student.name = "Kiran";
    student.course = "JavaScript";
    output.textContent =
        "OBJECT.CREATE() EXAMPLE\n\n" +
        "Name: " + student.name +
        "\nCourse: " + student.course +
        "\nInherited Method: " + student.greet();
}
// Check Prototype
function checkPrototype() {
    let emp = new Employee(104, "Sneha", "HR");
    let result = Object.getPrototypeOf(emp) === Employee.prototype;
    output.textContent =
        "CHECK PROTOTYPE\n\n" +
        "Employee object: " + emp.name +
        "\nHas Employee prototype? " + result +
        "\n\nPrototype Methods:\n" +
        Object.getOwnPropertyNames(Employee.prototype).join("\n");
}