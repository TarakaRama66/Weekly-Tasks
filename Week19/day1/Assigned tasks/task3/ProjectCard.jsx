function ProjectCard() {
  const projects = [
    {
      id: 1,
      name: "Smart Waste Management System",
      status: "Completed"
    },
    {
      id: 2,
      name: "Gym Management Platform",
      status: "In Progress"
    },
    {
      id: 3,
      name: "Employee Attendance Tracker",
      status: "Planning"
    }
  ];
  return (
    <div>
      <h2>Project Details</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>Status : {project.status}</p>
        </div>
      ))}
      <hr></hr>
    </div>
  );
}
export default ProjectCard;