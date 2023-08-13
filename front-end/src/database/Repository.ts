import axios from "axios";
import {Task} from '../Models/Models'

interface FormData {
    title: string,
    description: string
}

export default class Repository{
    
        static insert_task(formData: FormData): void{
            axios.post('http://localhost:3000/insert', formData)
            .then((response) => {
            console.log("acessou o port insert_task");
            console.log(response.data); // Mensagem enviada pelo servidor
    
            })
            .catch((error) => {
                console.error('Erro ao enviar o formulário:', error);
                }
            );
        }

        static get_task_list(): Promise<Task[]> {
            return axios.get('http://localhost:3000/tasklist')
              .then((response) => {
                console.log("lista de task");
                console.log(response.data);
                return response.data;
              })
              .catch((error) => {
                console.error('Erro ao obter a lista de tarefas:', error);
                throw error; // Lança o erro para ser tratado pelo chamador, se necessário
              });
          }
    }

