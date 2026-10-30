const STORAGE_KEY = "employee-management-records-v1";
// Get Employees
export function loadEmployees() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Storage read error:", error);
        return [];
    }
}
// Save Employees
export function saveEmployees(employees) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(employees)
        );
        return true;
    } catch (error) {
        console.error("Storage save error:", error);
        return false;
    }
}