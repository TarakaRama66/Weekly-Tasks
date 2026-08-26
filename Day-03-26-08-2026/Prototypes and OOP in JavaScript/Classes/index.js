class Employee {
  constructor(id,name,department,salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }
  getDetails() {
    return `ID: ${this.id}Name: ${this.name}Department: ${this.department}Salary: ₹${this.salary}`;
  }
  incrementSalary(amount) {this.salary += amount;}
}
class Developer extends Employee {
  constructor(id,name,department,salary,tech) {
    super(id,name,department,salary);
    this.tech = tech;
  }
  getDetails() {
    return `ID: ${this.id}
    Name: ${this.name}
    Department: ${this.department}
    Technology: ${this.tech}
    Salary: ₹${this.salary}`;
  }
}

const dev = new Developer(466,"Gupta","Engineering",80000,"React");

console.log(dev.getDetails());
dev.incrementSalary(10000);
console.log(`Updated Salary: ₹${dev.salary}`);