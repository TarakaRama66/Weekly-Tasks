import { useMemo, useState } from "react";

const employees = [
  { id: 1, name: "Taraka", department: "Frontend", salary: 45000 },
  { id: 2, name: "Siddu", department: "Backend", salary: 55000 },
  { id: 3, name: "Pooja", department: "Frontend", salary: 50000 },
  { id: 4, name: "Nada", department: "Testing", salary: 40000 },
  { id: 5, name: "Arun", department: "Backend", salary: 60000 },
];

export default function Task3() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [count, setCount] = useState(0);

  // Filter employees only when relevant dependencies change.
  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees...");

    return employees.filter((employee) => {
      const matchesName = employee.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesName && matchesDepartment;
    });
  }, [search, department]);

  // Calculate analytics from the filtered employee list.
  const analytics = useMemo(() => {
    console.log("Calculating salary analytics...");

    const totalSalary = filteredEmployees.reduce(
      (total, employee) => total + employee.salary,
      0
    );

    const averageSalary =
      filteredEmployees.length > 0
        ? totalSalary / filteredEmployees.length
        : 0;

    return { totalSalary, averageSalary };
  }, [filteredEmployees]);

  return (
    <main style={{ fontFamily: "Arial", padding: "24px" }}>
      <h1>Employee Salary Analytics</h1>

      <h2>Unrelated Counter: {count}</h2>

      <button onClick={() => setCount((c) => c + 1)}>
        Increment Counter
      </button>

      <p>
        <label htmlFor="search">Search employee: </label>
        <input
          id="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter employee name"
        />
      </p>

      <p>
        <label htmlFor="department">Department: </label>
        <select
          id="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}>
          <option value="All">All Departments</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Testing">Testing</option>
        </select>
      </p>
      <h3>
        Total Salary: ₹{analytics.totalSalary.toLocaleString("en-IN")}
      </h3>
      <h3>
        Average Salary: ₹
        {Math.round(analytics.averageSalary).toLocaleString("en-IN")}
      </h3>
      <h3>Employees ({filteredEmployees.length})</h3>
      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              {employee.name} — {employee.department} — ₹
              {employee.salary.toLocaleString("en-IN")}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}