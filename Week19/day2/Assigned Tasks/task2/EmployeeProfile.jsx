function EmployeeProfile({
  company,
  salary,
  employee,
  skills,
  projects,
  showExperience,
}) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>Employee Details</h2>
 
      {/* String */}
      <p>
        <strong>Company:</strong> {company}
      </p>
 
      {/* Object */}
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
 
      <p>
        <strong>Designation:</strong>
        {employee.designation}
      </p>
 
      {/* Number */}
      <p>
        <strong>Salary:</strong>
        ₹{salary}
      </p>
 
      {/* Boolean */}
      <p>
        <strong>Status:</strong>
        {employee.isActive
          ? " Active Employee"
          : " Inactive Employee"}
      </p>
 
      {/* Function */}
      <p>
        <strong>Experience:</strong>
        {showExperience()}
      </p>
 
      {/* Nested Object */}
      <h3>Address</h3>
 
      <p>
        {employee.address.city},
        {employee.address.state},
        {employee.address.country}
      </p>
 
      {/* Array */}
      <h3>Skills</h3>
 
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
 
      {/* Array Of Objects */}
      <h3>Projects</h3>
 
      {projects.map((project) => (
        <div key={project.id}>
          <p>
            Project: {project.name}
          </p>
 
          <p>
            Status: {project.status}
          </p>
 
          <hr />
        </div>
      ))}
    </div>
  );
}
 
export default EmployeeProfile;