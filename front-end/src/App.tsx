import { useEffect, useState } from 'react'
import { Header } from './modules/Header'
import Modal from './modules/Modal';
import { TaskList } from './modules/Tasklist'
import './app_style.scss'
import Repository from './database/Repository'
import { Task } from './Models/Models';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showModal, setModal] = useState(false)
  const [tasklist, setTasklist] = useState<Task[]>([]); // Initialize with an empty array

  useEffect(() => {
    async function fetchTaskList() {
      try {
        const fetchedTaskList = await Repository.get_task_list();
        setTasklist(fetchedTaskList);
      } catch (error) {
        console.log("retrieve tasklist error:" + "\n" + error)
      }
    }

    fetchTaskList();
  }, []); // Run this effect only once, similar to componentDidMount



  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(Repository.get_task_list())
  };
  
  const themeClass = isDarkMode ? 'dark' : 'light';

  

  return (
    <div className={`main_wrapper ${themeClass}`}>
      <Header
        toggleMode={toggleMode}
        themeClass={themeClass}
        setModal={() => setModal(!showModal)}

      />
      <div className='main '>
        <div className='tasklist_title'>
          <h1>Lista de tarefas</h1>
          <p>aqui você pode verificar quais tarefas estão cadastradas</p>
        </div>
        <TaskList task_list={tasklist} theme={themeClass} />
      </div>
      {showModal && (
        <Modal show={showModal} onClose={() => setModal(false)} theme={themeClass}>
        </Modal>
      )}


    </div>

  );



}

export default App;