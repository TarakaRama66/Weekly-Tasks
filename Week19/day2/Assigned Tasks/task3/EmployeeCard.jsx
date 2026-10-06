function EmployeeCard({
  employee,
  promoteEmployee,
  giveBonus,
  increaseRating,
  removeEmployee,
}) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px",
      }}>
      <h2>{employee.name}</h2>
      <p><strong>Role:</strong> {employee.role}</p>
      <p><strong>Salary:</strong> ₹{employee.salary}</p>
      <p><strong>Rating:</strong> {employee.rating}/10</p>
      <button onClick={() =>promoteEmployee(employee.id)}>Promote</button>-
      <button onClick={() =>giveBonus(employee.id)}>Give Bonus</button>-
      <button onClick={() =>increaseRating(employee.id)}>Increase Rating</button>-
      <button onClick={() =>removeEmployee(employee.id)}>Remove Employee</button>
    </div>
  );
}
export default EmployeeCard;