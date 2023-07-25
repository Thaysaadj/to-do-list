import { Trash } from '@phosphor-icons/react'
import styles from './TaskItem.module.css'

export function TaskItem({ handleCheck, task, onDeleteTask }) {

  function handleChange() {
    handleCheck(task.id)
  }


  function handleDeleteTask() {
    onDeleteTask(task)
  }

  return (
    <section className={styles.containerTask}>
      <div className={styles.checkTask}>
        <div className={styles.checkBox}>
          <div className={styles.inputCheck}>
            <input type="checkbox" id={task.id} name={task.id} defaultChecked={task.isConcluded} className={styles.radio} />
            <label onClick={handleChange} htmlFor={task.id} className={styles.radioLabel}>
              <div className={styles.containerParagraphTaskItem}>
                <p className={styles.paragraphTaskItem}>{task.text}</p>
              </div>
            </label>
          </div>
          <button onClick={handleDeleteTask} className={styles.containerTrash}>
            <Trash size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}