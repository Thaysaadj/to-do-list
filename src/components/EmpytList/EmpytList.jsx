import styles from './EmpytList.module.css'
import taskCheck from '../../assets/Task.svg'

export function EmpytList() {
  return (
    <div className={styles.containerContentTask}>
      <div className={styles.contentTask}>
        <img src={taskCheck} />
        <div className={styles.contentParagraph}>
          <p className={styles.information1}>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.information2}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}