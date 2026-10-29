const API_URL = "https://jsonplaceholder.typicode.com/users";

// Reusable API request function
async function apiRequest(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
}

// GET: Fetch employees
export async function getEmployees() {
    return apiRequest(API_URL);
}

// POST: Create an employee
export async function createEmployee(employee) {
    return apiRequest(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });
}

// GET: Fetch a single employee
export async function getEmployeeById(id) {
    return apiRequest(`${API_URL}/${id}`);
}

// PATCH: Update selected employee fields
export async function updateEmployee(id, updates) {
    return apiRequest(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    });
}

// DELETE: Delete an employee
export async function deleteEmployee(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return true;
}
