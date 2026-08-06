class Employee {
  constructor(name, role = "Developer") {
    this.name = name;
    this.role = role;
  }

  display() {
    return `${this.name} works as ${this.role}`;
  }
}

export default Employee;