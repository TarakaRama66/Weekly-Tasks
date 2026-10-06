function Project({ project }) {
  const getStatus = () => {
    if (project.progress === 100) return "Completed";
    if (project.progress >= 70) return "On Track";
    if (project.progress >= 40) return "In Progress";
    return "Delayed";
  };
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px",
      }}
    >
      <h2>{project.name}</h2>
      <p>
        <strong>Manager:</strong> {project.manager}
      </p>
      <p>
        <strong>Progress:</strong> {project.progress}%
      </p>
      <p>
        <strong>Priority:</strong> {project.priority}
      </p>
      <p>
        <strong>Status:</strong> {getStatus()}
      </p>
    </div>
  );
}
export default Project;