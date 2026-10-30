const output = document.getElementById("output");

// 1. Global Context
function globalContext() {
    return "Global Function: " + (this === window);
}

// 2. Object Context
const employee = {
    name: "Taraka",
    role: "Frontend Developer",

    displayDetails: function () {
        return "Name: " + this.name +
            ", Role: " + this.role;
    }
};

// 3. Regular Function
function regularFunction() {
    return "Regular Function: " + (this === window);
}

// 4. Arrow Function
const arrowFunction = () => {
    return "Arrow Function: " + (this === window);
};

// 5. Nested Function
const student = {
    name: "Rahul",

    display: function () {
        const innerFunction = () => {
            return "Student Name: " + this.name;
        };

        return innerFunction();
    }
};

// 6. Class Context
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        return "Name: " + this.name +
            ", Age: " + this.age;
    }
}

const person = new Person("Kiran", 24);


// Button Events

document.getElementById("globalBtn").addEventListener("click", function () {
    output.textContent = globalContext();
});

document.getElementById("objectBtn").addEventListener("click", function () {
    output.textContent = employee.displayDetails();
});

document.getElementById("regularBtn").addEventListener("click", function () {
    output.textContent = regularFunction();
});

document.getElementById("arrowBtn").addEventListener("click", function () {
    output.textContent = arrowFunction();
});

document.getElementById("nestedBtn").addEventListener("click", function () {
    output.textContent = student.display();
});

document.getElementById("classBtn").addEventListener("click", function () {
    output.textContent = person.displayDetails();
});
