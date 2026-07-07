function showEmployees() {
    let employees = document.querySelectorAll(".employee");

    employees.forEach(emp => {
        console.log(emp.textContent);
    });
}