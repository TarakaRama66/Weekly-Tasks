export function saveEmployees(data) {
    localStorage.setItem("employees", JSON.stringify(data));
}
export function loadEmployees() {
    return JSON.parse(localStorage.getItem("employees")) || [];
}