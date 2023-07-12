
import './header_style.scss';

interface HeaderProps {
    toggleMode: () => void;
    themeClass : string
  }
  
  export function Header(props: HeaderProps) {
    return (
      <header className={`main ${props.themeClass}`}>
        <h2>Bem vindo</h2>
        <button className='theme_button' onClick={props.toggleMode}>Toggle Mode</button>
      </header>
    );
  }