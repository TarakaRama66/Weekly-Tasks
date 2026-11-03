const output = document.getElementById("output");
//basic
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    displayEmployee() {
        return `
Employee Name: ${this.name}
Department: ${this.department}
`;
    }

}
class Developer extends Employee {
    constructor(name, department, language) {
        super(name, department);
        this.language = language;
    }
    displayDeveloper() {
        return `
${this.displayEmployee()}
Programming Language: ${this.language}
`;
    }
}
function basicInheritance() {
    let dev = new Developer(
        "Rahul",
        "Frontend",
        "JavaScript"
    );
    output.textContent =
        "BASIC INHERITANCE\n\n" +
        dev.displayDeveloper();
}
//super keyword
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.name} and my age is ${this.age}.`;
    }
}
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    displayStudent() {
        return `
${super.introduce()}
Course: ${this.course}
`;
    }
}
function superExample() {
    let student = new Student(
        "Priya",
        22,
        "React"
    );
    output.textContent =
        "SUPER KEYWORD EXAMPLE\n\n" +
        student.displayStudent();
}
//method overriding
class Animal {
    makeSound() {
        return "Animals make different sounds.";
    }
}
class Dog extends Animal {
    makeSound() {
        return "Dog says: Woof Woof!";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Cat says: Meow Meow!";
    }
}
function methodOverriding() {
    let animal = new Animal();
    let dog = new Dog();
    let cat = new Cat();
    output.textContent =
        "METHOD OVERRIDING\n\n" +
        "Animal: " + animal.makeSound() +
        "\nDog: " + dog.makeSound() +
        "\nCat: " + cat.makeSound();
}
//multilevel inheritance
class Organization {
    constructor(company) {
        this.company = company;
    }
    showCompany() {
        return `Company: ${this.company}`;
    }
}
class Manager extends Organization {
    constructor(company, managerName) {
        super(company);
        this.managerName = managerName;
    }
    showManager() {
        return `Manager: ${this.managerName}`;
    }
}
class TeamLead extends Manager {
    constructor(company, managerName, teamName) {
        super(company, managerName);
        this.teamName = teamName;
    }
    showTeam() {
        return `
${this.showCompany()}
${this.showManager()}
Team: ${this.teamName}
`;
    }
}
function multilevelInheritance() {
    let lead = new TeamLead(
        "NYB Infotech",
        "Kiran",
        "Frontend Team"
    );
    output.textContent =
        "MULTILEVEL INHERITANCE\n\n" +
        lead.showTeam();
}