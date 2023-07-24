import { useState } from 'react'
import { Header } from './modules/Header'
import Modal from './modules/Modal';
import { TaskList } from './modules/Tasklist'
import './app_style.scss'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showModal, setModal] = useState(false)
  const [task_list,set_task_list] = useState(get_task_list)

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClass = isDarkMode ? 'dark' : 'light';

  let taskes = [
    {
      title: 'titulo',
      description: 'Descrição',
      id: '0',
    },
  ];

  function get_task_list(){

  }

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
        <TaskList task_list={taskes} theme={themeClass} />
      </div>
      {showModal && (
        <Modal show={showModal} onClose={() => setModal(false)} theme={themeClass}>
        </Modal>
      )}


    </div>

  );



}

export default App;