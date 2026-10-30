const API_URL = "https://jsonplaceholder.typicode.com/users";
// Fetch Employees
export async function fetchEmployeesFromApi() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch employee data.");
    }
    const users = await response.json();
    return users.map((user, index) => ({
        id: `api-${user.id}`,
        name: user.name,
        email: user.email,
        department: [
            "Engineering",
            "Sales",
            "Marketing",
            "Operations"
        ][index % 4],
        role: user.company?.bs || "Team Member",
        salary: 30000 + index * 2500,
        joiningDate: "2024-01-15",
        source: "API"
    }));
}