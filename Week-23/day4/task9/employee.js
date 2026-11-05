
export let employees = [
    {
        id: 1,
        name: "Rahul",
        salary: 30000
    },
    {
        id: 2,
        name: "Priya",
        salary: 40000
    },
    {
        id: 3,
        name: "Kiran",
        salary: 35000
    }
];

// Display employees
export function getEmployees() {
    return employees;
}

// Add employee
export function addNewEmployee() {

    employees.push({
        id: 4,
        name: "Sneha",
        salary: 45000
    });

}

// Calculate total salary
export function getTotalSalary() {

    return employees.reduce((total, emp) => {
        return total + emp.salary;
    }, 0);

}
