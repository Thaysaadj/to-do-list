import { PlusCircle } from "phosphor-react";
import styles from './CreateTask.module.css'
import { useState } from 'react'

export function CreateTask() {

  const [task, setTask] = useState(['Lavar Banheiro'])
  const [newTask, setNewTask] = useState

  function handleCreatTask() {
    console.log("chamou")
    
  }

  return (
    <article className={styles.createForm}>  
      <form onSubmit={handleCreatTask} className={styles.formCreatTask}>
        <input
          className={styles.inputCreatTask}
          type="text"
          name=""
          id=""
          placeholder="Adicionar uma nova tarefa"
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

    </article>
  )
}