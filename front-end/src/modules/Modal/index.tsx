import React from 'react';
import './modal_style.scss';
import {Form} from '../Form'

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  theme:string
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children ,theme}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={`modal ${theme}`}>
      <button className="modal-close" onClick={onClose}>
            Fechar
      </button>
        <header>
          <h3>FORMULARIO</h3>
        </header>
        <div className="modal-content">
          <Form theme = {theme}></Form>
        </div>
      </div>
    </div>
  );
};

export default Modal;