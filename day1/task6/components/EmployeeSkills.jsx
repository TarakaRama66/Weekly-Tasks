
function EmployeeSkills({ skills }) {
  return (
    <div>
      <h2>Employee Skills</h2>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeSkills;
