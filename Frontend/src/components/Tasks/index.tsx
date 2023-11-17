
import { Task } from '../Task';
import styles from './tasks.module.css';

interface TaskItem {
  id: string;
  isCompleted: boolean;
  title: string;
}

interface TasksProps {
  tasks: TaskItem[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: TasksProps): JSX.Element {
  const tasksQuantity: number = tasks.length;
  const completedTasks: number = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task: TaskItem) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  );
}
