
import './header_style.scss';

interface HeaderProps {
    toggleMode: () => void;
    setModal : () => void;
    themeClass : string

  }
  
  export function Header(props: HeaderProps) {
    return (
      <header className={`main ${props.themeClass}`}>
        <div className='left_header'>
            <h2>Bem vindo</h2>
            <button className='insert_task' onClick={props.setModal}>nova tarefa</button>
        </div>
        <button className={`theme_button ${props.themeClass}`} onClick={props.toggleMode}>Toggle Mode</button>
      </header>
    );
  }