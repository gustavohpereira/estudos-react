import { useState } from 'react';
import './form_style.scss'
import axios from 'axios';
import Repository from '../../database/Repository';

interface FormProps{
  theme: string;
}

export const Form = (props: FormProps) => {

  const [title,set_title] = useState('')
  const [description,set_description] = useState('')

  const handle_submit = (event:Event) => {
    event.preventDefault();
    
    const formData = {
      title: title,
      description : description
    };

    Repository.insert_task(formData)


  };


  return (
    <form className={props.theme} onSubmit={handle_submit}>
      <div className="input_wrapper">
        <label htmlFor="input_name">Nome</label>
        <input 
          id="input_name" 
          placeholder="Insira o nome da tarefa" 
          onChange={(event) => set_title(event.target.value)}
          />
      </div>

      <div className="input_wrapper">
        <label htmlFor="input_descricao">Descrição</label>
        <input 
          id="input_descricao" 
          placeholder="Insira a descrição da tarefa" 
          onChange={(event) => set_description(event.target.value)}
          />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};