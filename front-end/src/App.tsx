import { useState } from 'react'
import { Header } from './modules/Header'
import './app_style.scss'
import { TaskList } from './modules/Tasklist'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className={`${themeClass}`}>
      <Header    
        toggleMode={toggleMode}
        themeClass={themeClass}
      />
      <div className='main '>
        <div className='tasklist_title'>
          <h1>Lista de tarefas</h1>
          <p>aqui você pode verificar quais tarefas estão cadastradas</p>
        </div>
        <TaskList task_list={taskes} theme={themeClass}  />
      </div>
    </div>
  );
}

export default App;