
import express from 'express';
import sqlite3 from 'sqlite3';

interface Task{
  title: string,
  description: string
};


export default class Repository {

  private db: sqlite3.Database
  private table_name: string

  constructor(table_name: string) {
    this.db = new sqlite3.Database('.database.sqlite', (err) => {
      if (err) {
        console.error('Erro ao abrir o banco de dados:', err);
      } else {
        console.log('Conexão bem-sucedida com o banco de dados SQLite');
      }
    });

    this.table_name = table_name;

    this.init();
  }

  public init() {
    this.db.run(
      `CREATE TABLE IF NOT EXISTS ${this.table_name} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            description TEXT,
            completed INTEGER DEFAULT 0
          )`,
      (err) => {
        if (err) {
          console.error('Erro ao criar a tabela:', err);
        } else {
          console.log(`Tabela ${this.table_name} criada com sucesso.`);
        }
      }
    );
  }

  public insert_task(title: string, description: string) {

    this.db.run(
      `INSERT INTO ${this.table_name} (title,description) VALUES (?, ?)`,
      [title, description],
      (err) => {
        if (err) {
          console.error('Erro ao inserir a tarefa:', err);
        } else {
          console.log('Tarefa inserida com sucesso.');
        }

      }
    );

  }

  public get_all_tasks(callback: (err: Error | null, tasks: Task[] | null) => void){
    this.db.all('SELECT title, description,id FROM tasks',(err,rows:Task[]) =>{
      if(err){
        console.error('Erro ao buscar os registros:', err);
        callback(err, null);

      }else{
        callback(null,rows)
      }

    })
  }


}


