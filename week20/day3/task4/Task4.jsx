
import { useState, useCallback } from "react";
import Counter from "./components/Counter";
import EmployeeList from "./components/EmployeeList";

const initialEmployees = [
  { id: 1, name: "Taraka", role: "Frontend Developer" },
  { id: 2, name: "Rohit", role: "Backend Developer" },
  { id: 3, name: "Priyanka", role: "UI Developer" },
];

export default function Task4() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(initialEmployees);
  const [name, setName] = useState("");

  console.log("App rendered");

  const handleIncrement = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  const handleDelete = useCallback((id) => {
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id)
    );
  }, []);

  const handleAdd = useCallback(() => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    setEmployees((previousEmployees) => [
      ...previousEmployees,
      {
        id: Date.now(),
        name: trimmedName,
        role: "Frontend Developer",
      },
    ]);

    setName("");
  }, [name]);

  return (
    <main>
      <h1>Employee Management Dashboard</h1>

      <Counter count={count} onIncrement={handleIncrement} />

      <hr />

      <h2>Add Employee</h2>

      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter employee name"
      />

      <button onClick={handleAdd}>Add Employee</button>

      <EmployeeList
        employees={employees}
        onDelete={handleDelete}
      />
    </main>
  );
}