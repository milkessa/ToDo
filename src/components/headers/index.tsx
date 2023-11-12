import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai';
export function Header(){
    return(
        <header className={styles.header}>
            <p>header</p>
            <form action="" className={styles.newTaskForm}>
                <input placeholder='add a new task' type='text' />
                <button>
                    Create
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}