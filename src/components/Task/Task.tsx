import { Trash } from '@phosphor-icons/react'
import task from '../../assets/Task.svg'
import styles from './Task.module.css'
export function Task() {
  return (
    <div>
      <div className={styles.containerHeaderTask}>
        <header className={styles.headerTask}>
          <p className={styles.totalTasks}>Tarefas Criadas
            <span className={styles.totalNumber}>0</span>
          </p>

          <p className={styles.completedCounter}>
            Concluídas
            <span className={styles.completedNumber}>0</span>
          </p>
        </header>
      </div>

      <div className={styles.containerContentTask}>
        <div className={styles.contentTask}>
          <img src={task} />
          <div className={styles.contentParagraph}>
            <p className={styles.information1}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.information2}>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>

        <div className={styles.checkTask}>
          <div className={styles.checkBox}>
            <div className={styles.inputCheck}>
              <input type="checkbox" id='radio' className={styles.radio} />
              <label for='radio' className={styles.radioLabel}>Nome da tarefa</label>
            </div>
            <Trash size={24}/>
          </div>
        </div>
      </div>
    </div >
  )
}