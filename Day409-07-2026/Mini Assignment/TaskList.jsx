function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
              }}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
export default TaskList;