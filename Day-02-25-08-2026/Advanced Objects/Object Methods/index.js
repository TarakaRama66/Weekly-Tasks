const employee={
    id:466,
    name:"Tarak Gupta",
    role:"React Developer",
    salary: 40000,

    getDetails(){
        return`${this.name} works as a ${this.role}`;
    },
    increaseSalary(amount){
        this.salary+=amount;
        return this.salary;
    }
};
console.log(employee.getDetails());
console.log(employee.increaseSalary(10000));

// object.keys();
console.log(Object.keys(employee));
// object.values();
console.log(Object.values(employee));
// object.entries();
console.log(Object.entries(employee));

// Destructuring
const {name,role}=employee;
console.log(name);
console.log(role);
// Spread Operator
const updatedEmployee={...employee,location:"Hyderabad"};
console.log(updatedEmployee);

// object.assign()
const companyInfo={
    company:"Nyb Infotech"
};
const mergeObject=Object.assign({},employee,companyInfo);
console.log(mergeObject);
