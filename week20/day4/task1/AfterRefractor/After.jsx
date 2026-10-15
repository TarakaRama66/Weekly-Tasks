import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function After() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Tarak", role: "Developer" },
    { id: 2, name: "Ram", role: "Designer" },
  ]);

  function addEmployee(employee) {
    setEmployees((previousEmployees) => [
      ...previousEmployees,
      { id: Date.now(), ...employee },
    ]);
  }

  function deleteEmployee(id) {
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id)
    );
  }

  return (
    <div>
      <h1>Employee Management</h1>

      <EmployeeForm onAddEmployee={addEmployee} />

      <h2>Employee List</h2>

      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
      />
    </div>
  );
}

export default After;