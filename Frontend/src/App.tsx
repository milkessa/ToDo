import React, { useState } from "react";
import { Header } from "./components/headers";
import { Tasks } from "./components/Tasks";


interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(taskTitle: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks  />
    </div>
  );
}

export default App;
