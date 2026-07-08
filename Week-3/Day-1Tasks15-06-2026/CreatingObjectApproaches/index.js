// Object Literal
let employee = {
    id: 101,
    name: "Gupta",
    role: "Developer"
};

console.log(employee);

//new.object()
let employee1 = new Object();

employee1.id = 102;
employee1.name = "Tarak";
employee1.role = "Tester";

console.log(employee1);

// Using Constructor Function
function Employee(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
}

let emp1 = new Employee(103, "Mahesh Babu", "Manager");

console.log(emp1);

// Es6
class Employee1 {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

let emp2 = new Employee1(104, "Siddu", "Designer");

console.log(emp2);