import { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";

function EmployeeForm() {
  const { dispatch } = useEmployees();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("Development");
  const [salary, setSalary] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const numericSalary = Number(salary);

    if (
      !name.trim() ||
      salary.trim() === "" ||
      !Number.isFinite(numericSalary) ||
      numericSalary < 0
    ) {
      alert("Enter a valid name and salary.");
      return;
    }

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        id: Date.now(),
        name: name.trim(),
        department,
        salary: numericSalary,
      },
    });

    setName("");
    setDepartment("Development");
    setSalary("");
  }

  return (
    <section>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <select
          value={department}
          onChange={(event) =>
            setDepartment(event.target.value)
          }
        >
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="HR">HR</option>
          <option value="Design">Design</option>
        </select>

        <input
          type="number"
          min="0"
          placeholder="Monthly salary"
          value={salary}
          onChange={(event) =>
            setSalary(event.target.value)
          }
          required
        />

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}

export default EmployeeForm;