import styles from './Task.module.css'
import { useEffect, useState } from "react";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { v4 as uuidv4 } from 'uuid'
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from '../TaskList/TaskList';


export function Task() {

  const id = uuidv4()

  //Estado que guarda tarefas existentes
  const [tasks, setTasks] = useState([])

  const [totalTasks, setTotalTasks] = useState([0])

  const [taskConcluded, setTaskConcluded] = useState(0)


  function handleTotalTasks() {
    setTotalTasks(tasks.length)
  }

  function handleConcludedTask() {
    let concludedTask = 0
    tasks.filter((task) => {
      if (task.isConcluded === true) {
        concludedTask++
      }
    })
    console.log("aqui",concludedTask)
    setTaskConcluded(concludedTask)
  }

  useEffect(() => {
    handleTotalTasks()
    handleConcludedTask()
  }, [tasks])


  const handleCreateTask = (newText) => {
    const newTasks = [...tasks, {
      id: id,
      text: newText,
      isConcluded: false
    }]
    setTasks(newTasks)
  }

  function handleCheck(editCheck) {
    let isChecked = tasks.find(task => task.id === editCheck)

    if(isChecked){
      if(isChecked.isConcluded === false){
        isChecked.isConcluded = true
      }else{
        isChecked.isConcluded =  false
      }
    }
    setTasks([...tasks])
  }

  function onDeleteTask(idTask) {
    const deleteTask = tasks.filter((task) => {
      return task != idTask
    })
    setTasks(deleteTask)
  }


  return (
    <article className={styles.createForm}>
      <TaskForm
        handleCreateTask={handleCreateTask}
      />
      <TaskCounter
        taskConcluded={taskConcluded}
        totalTasks={totalTasks}
        handleCheck={handleCheck}
      />
      <TaskList
        tasks={tasks}
        handleCheck={handleCheck}
        onDeleteTask={onDeleteTask}
      />
    </article>
  )
}