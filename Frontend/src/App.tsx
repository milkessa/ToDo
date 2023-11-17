import React, { useEffect, useState } from 'react';
import { Header } from './components/headers';
import { Tasks } from './components/Tasks';


interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  function setTasksAndSave(newTasks: Task[]): void {
    setTasks(newTasks);
  }

  useEffect(() => {
    // You can add any logic needed when the component mounts
    // For instance, fetching initial tasks from an API
  }, []);

  function addTask(taskTitle: string): void {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string): void {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId: string): void {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById} />
    </>
  );
}

export default App;
