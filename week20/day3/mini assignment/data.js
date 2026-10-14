
const departments = [
  "Frontend",
  "Backend",
  "Testing",
  "Design",
  "HR",
  "DevOps",
];

const names = [
  "Taraka",
  "Rahul",
  "Priya",
  "Sneha",
  "Arjun",
  "Kiran",
  "Ananya",
  "Vikram",
  "Divya",
  "Rohan",
];

export const employees = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `${names[index % names.length]} ${index + 1}`,
  email: `employee${index + 1}@example.com`,
  department: departments[index % departments.length],
  salary: 25000 + ((index * 1379) % 75000),
  experience: (index % 15) + 1,
  status: index % 5 === 0 ? "Inactive" : "Active",
}));
