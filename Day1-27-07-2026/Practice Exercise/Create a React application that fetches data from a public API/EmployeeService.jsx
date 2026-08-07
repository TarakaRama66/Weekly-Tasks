export async function getEmployees() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Unable to fetch employee details.");
  }

  return response.json();
}