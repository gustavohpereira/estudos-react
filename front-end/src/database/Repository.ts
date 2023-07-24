import axios from "axios";

interface FormData {
    titulo: string;
    descricao: string;
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
            });
    }
}