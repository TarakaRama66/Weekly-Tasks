import Project from "./Project";
 
function Task1App() {
  const projects = [
    {
      id: 1,
      name: "AI Recruitment Portal",
      manager: "Taraka Ram",
      progress: 85,
      priority: "High",
    },
    {
      id: 2,
      name: "E-Commerce Dashboard",
      manager: "Siddu",
      progress: 45,
      priority: "Medium",
    },
    {
      id: 3,
      name: "Smart Waste Management",
      manager: "Pavan",
      progress: 100,
      priority: "Completed",
    },
  ];
  return (
    <div>
      <h1>Project Monitoring Dashboard</h1>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}
export default Task1App;