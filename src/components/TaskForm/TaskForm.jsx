import { useState } from "react"
import styles from './TaskForm.module.css'
import { PlusCircle } from "phosphor-react";


export function TaskForm({handleCreateTask}) {

  const [taskName, setTaskName] = useState("")

  function handleChange(event) {
    event.preventDefault()
    setTaskName(event.target.value)
  }

  function handleClick(event) {
    event.preventDefault()
    handleCreateTask(taskName)
    setTaskName("")
  }
  
  return(
    <section>
      <form className={styles.formCreatTask}>
        <input
          className={styles.inputCreatTask}
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={handleChange}
          required
          value={taskName}
        />
        <button onClick={handleClick}
          type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </section>
  )
}