function EmployeeCard() {
  return (
    <>
      <h2>Employee Information</h2>
      <p>ID : 101</p>
      <p>Name : Taraka Ram</p>
      <p>Role : Associate Software Engineer</p>
      <p>Location : Hyderabad</p>
    </>
  );
}
function SkillsCard() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux Toolkit"
  ];
  return (
    <>
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
function ProjectCard() {
  const projects = [
    "Gym Management System",
    "Smart Waste Management",
    "Employee Dashboard",
    "Weather Application"
  ];
  return (
    <>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <p key={index}>{project}</p>
      ))}
    </>
  );
}
function StatisticsCard() {
  const completedProjects = 12;
  const pendingProjects = 3;
  return (
    <>
      <h2>Statistics</h2>
      <p>Completed Projects : {completedProjects}</p>
      <p>Pending Projects : {pendingProjects}</p>
      <p>
        Status : {completedProjects > pendingProjects ? " Excellent" : " Need Improvement"}
      </p>
    </>
  );
}
function Task7() {
  return (
    <>
      <h1>React Fragment Example</h1>
      <hr></hr>
      <EmployeeCard />
      <hr></hr>
      <SkillsCard />
      <hr></hr>
      <ProjectCard />
      <hr></hr>
      <StatisticsCard />
    </>
  );
}
export default Task7;