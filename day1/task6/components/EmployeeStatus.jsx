
function EmployeeStatus({ isActive }) {
  return (
    <div>
      <h2>Employee Status</h2>

      {isActive ? (
        <p>Employee is Active</p>
      ) : (
        <p>Employee is Inactive</p>
      )}
    </div>
  );
}

export default EmployeeStatus;
