import express from 'express';
import Repository from './DB/Repository';
import cors from 'cors';

const app = express();
const port = 3000;
const rep = new Repository('tasks');

// Adicione o middleware cors para permitir o acesso do frontend no endereço "http://127.0.0.1:5173"
app.use(cors());

// Adicione o middleware express.json() para processar o corpo das requisições como JSON
app.use(express.json());

// ROTAS
app.get('/', (req, res) => {
  console.log("root");
  res.send('Root route');
});

app.post('/insert', (req, res) => {
  const { title, description } = req.body;
  rep.insert_task(title, description);
  console.log(title, description);
  res.send('Tarefa inserida com sucesso.');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});