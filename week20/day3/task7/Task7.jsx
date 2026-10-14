
import { useState, useMemo, Profiler } from "react";
import EmployeeList from "./EmployeeList";

const employees = [
  { id: 1, name: "Taraka", role: "Frontend Developer" },
  { id: 2, name: "Kamal", role: "Backend Developer" },
  { id: 3, name: "Neha", role: "UI Developer" },
];

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration
) {
  console.log("Profiler:", id);
  console.log("Phase:", phase);
  console.log("Actual duration:", actualDuration.toFixed(2), "ms");
  console.log("Base duration:", baseDuration.toFixed(2), "ms");
}

export default function Task7() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  console.log("App rendered");

  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees");

    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main>
      <h1>React Performance Profiler</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount((c) => c + 1)}>
        Increment Counter
      </button>

      <p>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search employees"
        />
      </p>

      <Profiler id="EmployeeDashboard" onRender={onRenderCallback}>
        <EmployeeList employees={filteredEmployees} />
      </Profiler>
    </main>
  );
}