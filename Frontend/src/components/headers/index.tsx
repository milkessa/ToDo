import { useState, ChangeEvent, FormEvent } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './header.module.css';

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps): JSX.Element {
  const [title, setTitle] = useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onAddTask(title);
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <p>To Do App with React and Vite</p>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder='add a new task' type='text' onChange={onChangeTitle} />
        <button type='submit'>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
