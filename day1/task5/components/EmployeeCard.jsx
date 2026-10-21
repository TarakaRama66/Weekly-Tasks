function EmployeeCard({ name, age, salary, skills, employee, isActive }) {
  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Salary: ₹{salary}</p>

      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h3>Employee Information</h3>
      <p>ID: {employee.id}</p>
      <p>Department: {employee.department}</p>

      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default EmployeeCard;