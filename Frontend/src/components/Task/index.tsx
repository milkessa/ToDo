import styles from './task.module.css'
import {TbTrash} from 'react-icons/tb'
import {BiEditAlt} from 'react-icons/bi'
export function Task(){
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />

            </button>
            <p>Submitting the first assignment</p>
            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
            <button className={styles.deleteButton}>
                <BiEditAlt size={20}/>
            </button>

        </div>
    )
}