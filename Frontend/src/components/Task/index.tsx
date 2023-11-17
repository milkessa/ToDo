import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import React from 'react';

interface TaskProps {
  task: {
    id: string;
    isCompleted: boolean;
    title: string;
  };
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps): JSX.Element {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
