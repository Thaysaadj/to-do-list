import { EmpytList } from "../EmpytList/EmpytList"
import { TaskItem } from "../TaskItem/TaskItem"
import styles from './TaskList.module.css'

export function TaskList({tasks, handleCheck, onDeleteTask}) {

  return(
    <div className={styles.containerTaskList}>
      {tasks.length ?
        <div>
          {
            tasks.map(task => {
              return (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  task={task}
                  handleCheck={handleCheck}
                  onDeleteTask={onDeleteTask}
                />
              )
            })
          }
        </div>
        :
        <EmpytList />
      }
    </div>
  )
}