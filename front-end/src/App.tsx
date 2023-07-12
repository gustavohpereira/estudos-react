import { useState } from 'react'
import { Header } from './modules/Header'
import './app_style.scss'
import { TaskList } from './modules/Tasklist'

function App() {
  const [count, setCount] = useState(0)

  let taskes = [
    {
      title : "titulo",
      description : "Descrição",
      id : "0"

    }
  ]

  return (
    <>
    <Header></Header>
    <div className='main'>
      <div className='tasklist_title'>
        <h1>Lista de tarefas</h1>
        <p>aqui você pode verificar quais tarefas estão cadastradas</p>
      </div>
      <TaskList task_list= {taskes}></TaskList>
    </div>
    </>
   
  )
}

export default App
