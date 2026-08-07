import { useState } from "react";
function TaskForm({ addTask }) {
  // Local state for input field
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    // Clear input after adding task
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}/>
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;