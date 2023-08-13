
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
            <button className='header_button' onClick={props.setModal}>Nova tarefa</button>
            <button className='header_button'>Deletar tarefa</button>
        </div>
        <button className={`theme_button ${props.themeClass}`} onClick={props.toggleMode}>Toggle Mode</button>
      </header>
    );
  }