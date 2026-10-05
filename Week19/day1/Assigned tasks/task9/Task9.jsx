function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <hr />
    </>
  );
}
 
function EmployeeCard({
  id,
  name,
  role,
  location
}) {
  return (
    <>
      <h2>Employee Details</h2>
 
      <p>ID : {id}</p>
      <p>Name : {name}</p>
      <p>Role : {role}</p>
      <p>Location : {location}</p>
 
      <hr />
    </>
  );
}
 
function SkillCard({ skillName, level }) {
  return (
    <>
      <p>
        {skillName} - {level}
      </p>
    </>
  );
}
 
function ProjectCard({
  projectName,
  status,
  duration
}) {
  return (
    <>
      <h3>{projectName}</h3>
 
      <p>Status : {status}</p>
 
      <p>Duration : {duration}</p>
 
      <hr />
    </>
  );
}
 
function Footer({ company }) {
  return (
    <>
      <h3>{company}</h3>
    </>
  );
}
 
function Task9() {
  const employees = [
    {
      id: 101,
      name: "Taraka Ram",
      role: "Frontend Developer",
      location: "Hyderabad"
    },
    {
      id: 102,
      name: "Rahul",
      role: "React Developer",
      location: "Bangalore"
    }
  ];
 
  const projects = [
    {
      id: 1,
      projectName: "Smart Waste Management",
      status: "Completed",
      duration: "3 Months"
    },
    {
      id: 2,
      projectName: "Gym Management System",
      status: "In Progress",
      duration: "5 Months"
    }
  ];
 
  return (
    <>
      <Header title="Employee Management Dashboard" />
 
      <h2>Employees</h2>
 
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={employee.name}
          role={employee.role}
          location={employee.location}
        />
      ))}
 
      <h2>Technical Skills</h2>
 
      <SkillCard
        skillName="HTML"
        level="Advanced"
      />
 
      <SkillCard
        skillName="CSS"
        level="Advanced"
      />
 
      <SkillCard
        skillName="JavaScript"
        level="Expert"
      />
 
      <SkillCard
        skillName="React"
        level="Expert"
      />
 
      <hr />
 
      <h2>Projects</h2>
 
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          projectName={project.projectName}
          status={project.status}
          duration={project.duration}
        />
      ))}
 
      <Footer company="Navayuvabharat Infotech" />
    </>
  );
}
 
export default Task9;