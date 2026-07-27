// Function to fetch employee data from API
export async function getEmployees() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }
  return await response.json();
}