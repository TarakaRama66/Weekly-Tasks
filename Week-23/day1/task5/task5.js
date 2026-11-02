// GLOBAL THIS
function globalThisExample() {
    document.getElementById("output").innerText =
        "Global This: " + (this === window ? "Window Object" : "Other");
}
// OBJECT METHOD THIS
const employee = {
    name: "Tarak",
    role: "Frontend Developer",
    display: function () {
        return "Name: " + this.name +
            " | Role: " + this.role;
    }
};
function objectExample() {
    document.getElementById("output").innerText =
        employee.display();
}
// REGULAR FUNCTION THIS
function regularFunctionExample() {
    function show() {
        return this === window
            ? "Regular Function: Window Object"
            : "Regular Function: Undefined or Other";
    }
    document.getElementById("output").innerText =
        show();
}
// ARROW FUNCTION THIS
const student = {
    name: "Tarak",
    display: function () {
        const show = () => {
            return "Arrow Function: " + this.name;
        };
        return show();
    }
};
function arrowFunctionExample() {
    document.getElementById("output").innerText =
        student.display();
}
// CONSTRUCTOR FUNCTION THIS
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function constructorExample() {
    const person = new Person("Taraka", 23);
    document.getElementById("output").innerText =
        "Name: " + person.name +
        " | Age: " + person.age;

}