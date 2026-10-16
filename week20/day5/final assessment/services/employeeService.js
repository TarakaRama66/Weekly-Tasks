
const initialEmployees = [
  {
    id: "101",
    name: "Ravi Kumar",
    email: "ravi@example.com",
    department: "Frontend",
    status: "Active",
  },
  {
    id: "102",
    name: "Priya Sharma",
    email: "priya@example.com",
    department: "Backend",
    status: "Active",
  },
  {
    id: "103",
    name: "Anil Kumar",
    email: "anil@example.com",
    department: "Testing",
    status: "Inactive",
  },
];

export async function getEmployees() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  try {
    const saved = localStorage.getItem("employees");

    if (saved !== null) {
      return JSON.parse(saved);
    }
  } catch {
    throw new Error("Unable to read saved employees");
  }

  localStorage.setItem("employees", JSON.stringify(initialEmployees));

  return initialEmployees;
}

export function saveEmployees(employees) {
  localStorage.setItem("employees", JSON.stringify(employees));
}