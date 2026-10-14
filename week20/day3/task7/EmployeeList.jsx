import { memo } from "react";

const EmployeeList = memo(function EmployeeList({ employees }) {
  console.log("EmployeeList rendered");

  return (
    <section>
      <h2>Employees</h2>

      {employees.map((employee) => (
        <p key={employee.id}>
          {employee.name} - {employee.role}
        </p>
      ))}
    </section>
  );
});

export default EmployeeList;