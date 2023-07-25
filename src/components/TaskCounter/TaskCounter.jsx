import styles from './TaskCounter.module.css'

export function TaskCounter({ totalTasks, tasksConcluded}) {

  console.log("tasks concluidas", tasksConcluded)

  return (
    <div>
      <div className={styles.containerHeaderTask}>
        <header className={styles.headerTask}>
          <p className={styles.totalTasks}>Tarefas Criadas
            <span className={styles.totalNumber}>{totalTasks}</span>
          </p>

          <p className={styles.completedCounter}>
            Concluídas
            <span className={styles.completedNumber}>{tasksConcluded} de {totalTasks}</span>
          </p>
        </header>
      </div>
    </div>
  )
}