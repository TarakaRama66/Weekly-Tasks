const employee = {id: 101,name: "Gupta",role: "React Developer",salary: 60000,
    address: {city: "Hyderabad",pincode: 500001},
    skills: ["React", "JavaScript", "Redux"],
    getDetails() {
        return `${this.name} works as ${this.role}`;
    },
    incrementSalary(amount) {this.salary += amount;
        return this.salary;
    }
};
// Object Method
console.log(employee.getDetails());
// Update Property
employee.salary = 65000;
// Add Property
employee.experience = 2;
// Delete Property
delete employee.role;
// Destructuring
const {name,salary,
    address: { city },...remainingData} = employee;
console.log(name);
console.log(salary);
console.log(city);
console.log(remainingData);
// Spread Operator

const updatedEmployee = {...employee,company: "ABC Technologies"};
console.log(updatedEmployee);

// Optional Chaining
console.log(employee.address?.city);
console.log(employee.contact?.phone);

// Nullish Coalescing
const phone = employee.contact?.phone ?? "Phone Number Not Available";
console.log(phone);

// Object.keys()
console.log(Object.keys(employee));

// Object.values()
console.log(Object.values(employee));

// Object.entries()
console.log(Object.entries(employee));

// Object.assign()
const companyInfo = {location: "India",department: "Frontend"};
const mergedObject = Object.assign({},employee,companyInfo);

console.log(mergedObject);

// Array Methods
const skillList = employee.skills.map(skill => skill.toUpperCase());
console.log(skillList);

const filteredSkills =employee.skills.filter(skill => skill.includes("React"));
console.log(filteredSkills);

// Dynamic Property Access
const key = "name";
console.log(employee[key]);

// Method Call
console.log(employee.incrementSalary(5000));