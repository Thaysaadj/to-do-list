import { CreateTask } from "./components/CreateTask/CreateTask"
import { Header } from "./components/Header/Header"
import { Task } from "./components/Task/Task"
import './global.css'
function App() {

  return (
    <>
      <Header/>
      <CreateTask/>
      <Task/>
    </>
  )
}

export default App
