import { memo } from "react";

const EmployeeList = memo(function EmployeeList({
  employees,
  onDelete,
}) {
  console.log("EmployeeList rendered");

  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.role}
              <button onClick={() => onDelete(employee.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default EmployeeList;