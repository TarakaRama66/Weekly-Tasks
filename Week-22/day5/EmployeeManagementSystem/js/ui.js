import { formatCurrency } from "./utils.js";
const employeeList = document.getElementById("employeeList");
const emptyState = document.getElementById("emptyState");
// Display Employees
export function renderEmployees(employees, handleAction) {
    employeeList.innerHTML = "";
    emptyState.classList.toggle(
        "hidden",
        employees.length > 0
    );
    employees.forEach(employee => {
        const card = document.createElement("div");
        card.className = "employee-card";
        const title = document.createElement("h3");
        title.textContent = employee.name;
        const details = document.createElement("p");
        details.textContent =
            `Email: ${employee.email}
             Department: ${employee.department}
             Role: ${employee.role}
             Salary: ${formatCurrency(Number(employee.salary))}
             Joining Date: ${employee.joiningDate}`;
        const detailsBtn = document.createElement("button");
        detailsBtn.textContent = "Details";
        detailsBtn.addEventListener("click", () => {
            handleAction("details", employee.id);
        });
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.addEventListener("click", () => {
            handleAction("edit", employee.id);
        });
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", () => {
            handleAction("delete", employee.id);
        });
        card.append(
            title,
            details,
            detailsBtn,
            editBtn,
            deleteBtn
        );
        employeeList.appendChild(card);
    });
}
// Dashboard Statistics
export function renderStats(employees) {
    document.getElementById("totalCount").textContent =
        employees.length;
    document.getElementById("departmentCount").textContent =
        new Set(employees.map(emp => emp.department)).size;
    const average = employees.length
        ? employees.reduce(
            (total, emp) => total + Number(emp.salary), 0
        ) / employees.length
        : 0;
    document.getElementById("averageSalary").textContent =
        formatCurrency(average);
}
// Department Filter
export function populateDepartmentFilter(employees) {
    const select = document.getElementById("filterDepartment");
    const currentValue = select.value;
    const departments = [
        ...new Set(employees.map(emp => emp.department))
    ].sort();
    select.replaceChildren(
        new Option("All Departments", "")
    );
    departments.forEach(department => {
        select.add(new Option(department, department));
    });
    select.value = departments.includes(currentValue)
        ? currentValue
        : "";
}
// Employee Details
export function showDetails(employee) {
    const content = document.getElementById("detailsContent");
    content.innerHTML = "";
    const fields = [
        ["Name", employee.name],
        ["Email", employee.email],
        ["Department", employee.department],
        ["Role", employee.role],
        ["Salary", formatCurrency(Number(employee.salary))],
        ["Joining Date", employee.joiningDate]
    ];
    fields.forEach(([label, value]) => {
        const p = document.createElement("p");
        p.textContent = `${label}: ${value}`;
        content.appendChild(p);
    });
    document.getElementById("detailsDialog").showModal();
}