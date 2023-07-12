import React from 'react';
import './modal_style.scss';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          Fechar
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;