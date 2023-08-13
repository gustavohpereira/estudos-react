import { TaskItem } from "./TaskItem";
import './task_list_style.scss'
import {Task} from '../../Models/Models'
import { useContext, useEffect, useState } from "react";

// const [task_list,set_task_list] = useState([])

interface TaskList_props{
  task_list : Task[],
  theme:string
}




export function TaskList(props : TaskList_props){
    return (
        <div className="tasklist_container">
        {props.task_list.map((task) => (
          <TaskItem key={task.id} task={task} theme={props.theme}/>
        ))}
      </div>
    )
}