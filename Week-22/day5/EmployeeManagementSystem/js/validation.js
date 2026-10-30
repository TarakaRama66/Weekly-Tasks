export function validateEmployee(employee) {
    const name = employee.name.trim();
    const email = employee.email.trim();
    const salary = Number(employee.salary);
    if (name.length < 2) {
        return "Name must contain at least 2 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Enter a valid email address.";
    }
    if (!employee.department) {
        return "Select a department.";
    }
    if (employee.role.trim().length < 2) {
        return "Enter a valid job role.";
    }
    if (!Number.isFinite(salary) || salary <= 0) {
        return "Salary must be greater than zero.";
    }
    if (!employee.joiningDate ||
        Number.isNaN(Date.parse(employee.joiningDate))) {
        return "Select a valid joining date.";
    }
    return "";
}