function EmployeeRow({ employee, onDelete }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.role}</td>
      <td>
        <button onClick={() => onDelete(employee.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EmployeeRow;