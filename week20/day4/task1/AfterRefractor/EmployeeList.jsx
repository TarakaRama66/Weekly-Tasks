import EmployeeRow from "./EmployeeRow";

function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <EmployeeRow
            key={employee.id}
            employee={employee}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;