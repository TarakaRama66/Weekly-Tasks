import { useState } from "react";

import UserCard from "./UserCard";
import ThemeButton from "./ThemeButton";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


function Dashboard() {

  // Local State
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React Context API",
      completed: false,
    },
    {
      id: 2,
      title: "Build Dashboard Project",
      completed: true,
    },
  ]);


  // Add new task
  const addTask = (title) => {

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([
      ...tasks,
      newTask,
    ]);
  };
  // Mark task completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };
  // Calculate completion percentage
  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length;
  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks / tasks.length) * 100
        );
  return (
    <main>
      <ThemeButton />
      <UserCard />
      <TaskForm
        addTask={addTask}/>
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}/>
      <h3>
        Completion: {progress}%
      </h3>
    </main>
  );
}

export default Dashboard;