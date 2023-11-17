import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState, ChangeEvent, FormEvent } from 'react';

interface HeaderProps {
  handleAddTask: (title: string) => void;
}

export function Header({ handleAddTask }: HeaderProps): JSX.Element {
  const [title, setTitle] = useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <p>To Do App</p>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
