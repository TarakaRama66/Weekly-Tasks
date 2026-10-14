import { useState, useCallback } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Counter from "./components/Counter";

function Task2() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("Light");

  const employee = {
    name: "Taraka Rama Tilak Gupta",
    role: "Associate Software Engineer",
    department: "Frontend",
  };

  const handleIncrement = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  console.log("App rendered");

  return (
    <div>
      <h1>Employee Dashboard</h1>

      <p>Theme: {theme}</p>

      <button
        onClick={() =>
          setTheme((previous) =>
            previous === "Light" ? "Dark" : "Light"
          )
        }
      >
        Change Theme
      </button>

      <Counter count={count} onIncrement={handleIncrement} />

      <EmployeeCard employee={employee} />
    </div>
  );
}

export default Task2;