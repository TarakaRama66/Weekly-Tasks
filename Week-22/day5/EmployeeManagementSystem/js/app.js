import { fetchEmployeesFromApi } from "./api.js";
import {loadEmployees,saveEmployees} from "./storage.js";
import { validateEmployee } from "./validation.js";
import {renderEmployees,renderStats,showDetails,populateDepartmentFilter} from "./ui.js";
import {debounce,createId} from "./utils.js";
// Employee Class
class Employee {
    constructor({
        id = createId(),
        name,
        email,
        department,
        role,
        salary,
        joiningDate,
        source = "Local"
    }) {
        this.id = id;
        this.name = name.trim();
        this.email = email.trim().toLowerCase();
        this.department = department;
        this.role = role.trim();
        this.salary = Number(salary);
        this.joiningDate = joiningDate;
        this.source = source;
    }
}
// Load Saved Employees
let employees = loadEmployees();
// HTML Elements
const form = document.getElementById("employeeForm");
const searchInput = document.getElementById("searchInput");
const filterDepartment = document.getElementById("filterDepartment");
const sortBy = document.getElementById("sortBy");
const employeeId = document.getElementById("employeeId");
const formMessage = document.getElementById("formMessage");
// Save and Display
function updateApplication(message = "Changes saved successfully.") {
    const saved = saveEmployees(employees);
    populateDepartmentFilter(employees);
    renderStats(employees);
    applyFilters();
    document.getElementById("status").textContent =
        saved ? message : "Unable to save employee data.";
}
// Search, Filter and Sort
function getFilteredEmployees() {
    const query = searchInput.value.toLowerCase().trim();
    const department = filterDepartment.value;
    let result = employees.filter(employee => {
        const matchesSearch = [
            employee.name,
            employee.email,
            employee.role,
            employee.department
        ].some(value =>
            value.toLowerCase().includes(query)
        );
        const matchesDepartment =
            !department || employee.department === department;
        return matchesSearch && matchesDepartment;
    });
    // Sorting
    if (sortBy.value === "salary-high") {
        result.sort((a, b) => b.salary - a.salary);
    } else if (sortBy.value === "salary-low") {
        result.sort((a, b) => a.salary - b.salary);
    } else if (sortBy.value === "date-new") {
        result.sort(
            (a, b) =>
                new Date(b.joiningDate) - new Date(a.joiningDate)
        );
    } else {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
}
// Apply Filters
function applyFilters() {
    renderEmployees(
        getFilteredEmployees(),
        handleEmployeeAction
    );
    renderStats(employees);
}
// Debounced Search
searchInput.addEventListener(
    "input",
    debounce(applyFilters, 300)
);
filterDepartment.addEventListener("change", applyFilters);
sortBy.addEventListener("change", applyFilters);
// Read Form
function readForm() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        role: document.getElementById("role").value,
        salary: document.getElementById("salary").value,
        joiningDate: document.getElementById("joiningDate").value
    };
}
// Reset Form
function resetForm() {
    form.reset();
    employeeId.value = "";
    document.getElementById("formTitle")?.replaceChildren();
    document.getElementById("saveBtn").textContent =
        "Add Employee";
    document.getElementById("cancelEditBtn").classList.add("hidden");
    formMessage.textContent = "";
}
// Register and Update Employee
form.addEventListener("submit", function(event) {
    event.preventDefault()
    const values = readForm();
    const error = validateEmployee(values);
    if (error) {
        formMessage.textContent = error;
        return;
    }
    const editingId = employeeId.value;
    const duplicateEmail = employees.some(employee =>
        employee.email === values.email.trim().toLowerCase() &&
        employee.id !== editingId
    );
    if (duplicateEmail) {
        formMessage.textContent =
            "Email address already exists.";
        return;
    }
    if (editingId) {
        employees = employees.map(employee =>
            employee.id === editingId
                ? new Employee({
                    ...values,
                    id: editingId
                })
                : employee
        );
        updateApplication("Employee updated successfully.");
    } else {
        employees.unshift(new Employee(values));
        updateApplication("Employee registered successfully.");
    }
    resetForm();
});
// Edit, Delete and Details
function handleEmployeeAction(action, id) {
    const employee = employees.find(emp => emp.id === id);
    if (!employee) return;
    // Details
    if (action === "details") {
        showDetails(employee);
    }
    // Edit
    if (action === "edit") {
        employeeId.value = employee.id;
        Object.keys({
            name: "",
            email: "",
            department: "",
            role: "",
            salary: "",
            joiningDate: ""
        }).forEach(key => {
            document.getElementById(key).value = employee[key];
        });
        document.getElementById("saveBtn").textContent =
            "Update Employee";
        document.getElementById("cancelEditBtn").classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth" });
    }
    // Delete
    if (action === "delete") {
        if (!confirm(`Delete ${employee.name}?`)) return;
        employees = employees.filter(emp => emp.id !== id);
        updateApplication("Employee deleted successfully.");
        if (employeeId.value === id) {
            resetForm();
        }
    }
}
// Cancel Edit
document.getElementById("cancelEditBtn").addEventListener(
    "click",
    resetForm
);
// Close Details
document.getElementById("closeDialogBtn").addEventListener(
    "click",
    () => document.getElementById("detailsDialog").close()
);
// API Integration
async function loadApiData() {
    const button = document.getElementById("refreshBtn");
    button.disabled = true;
    button.textContent = "Loading...";
    document.getElementById("status").textContent =
        "Loading employees from API...";
    try {
        const apiEmployees = await fetchEmployeesFromApi();
        const existingIds = new Set(
            employees.map(employee => employee.id)
        );
        const newEmployees = apiEmployees.filter(
            employee => !existingIds.has(employee.id)
        );
        employees = [...employees, ...newEmployees];
        updateApplication(
            `${newEmployees.length} API employees loaded successfully.`
        );
    } catch (error) {
        document.getElementById("status").textContent =
            "API Error: " + error.message;
    } finally {
        button.disabled = false;
        button.textContent = "Load API Data";
    }
}
document.getElementById("refreshBtn").addEventListener(
    "click",
    loadApiData
);
// Initial Application Rendering
populateDepartmentFilter(employees);
renderStats(employees);
applyFilters();
document.getElementById("status").textContent =
    "Employee Management System is ready.";