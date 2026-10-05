function Task4() {
  const employee = {
    id: 101,
    name: "Taraka Ram",
    role: "Associate Software Engineer",
    company: "NYB Infotech",
    salary: 25000,
    experience: 1
  };
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux Toolkit",
    "Git",
    "GitHub"
  ];
  const projects = 8;
  const getStatus = () => {
    return employee.experience >= 2? "Experienced Developer": "Fresher";
};
  return (
    <div>
      <h1>Task4</h1>
      <hr></hr>
      <h2>Employee Information</h2>
      <p>Employee ID : {employee.id}</p>
      <p>Name : {employee.name}</p>
      <p>Role : {employee.role}</p>
      <p>Company : {employee.company}</p>
      <p>Salary : ₹{employee.salary}</p>
      <p>Experience : {employee.experience} Years</p>
      <p>Status : {getStatus()}</p>
      <hr></hr>
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <hr></hr>
      <h2>Project Details</h2>
      <p>Total Projects : {projects}</p>
      <p>
        Project Category :
        {projects > 5 ? " Advanced Projects" : " Basic Projects"}
      </p>
      <hr></hr> 
      <h2>Mathematical Expressions</h2>
      <p>Addition : {20 + 30}</p>
      <p>Multiplication : {10 * 10}</p>
      <p>Square : {15 ** 2}</p>
      <p>Current Year : {new Date().getFullYear()}</p>
    </div>
  );
}
export default Task4;