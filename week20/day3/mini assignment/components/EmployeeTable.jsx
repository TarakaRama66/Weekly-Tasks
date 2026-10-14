
import { memo } from "react";

const EmployeeTable = memo(function EmployeeTable({ employees }) {
  console.log("EmployeeTable rendered");

  return (
    <section>
      <h2>Employee Directory ({employees.length})</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>
                ₹{employee.salary.toLocaleString("en-IN")}
              </td>
              <td>{employee.experience} years</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
});

export default EmployeeTable;
