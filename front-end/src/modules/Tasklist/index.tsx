import { TaskItem } from "./TaskItem";
import './task_list_style.scss'
import {Task} from '../../Models/Models'

interface TaskList_props{
  task_list : Task[]
}

export function TaskList({task_list} : TaskList_props){
    return (
        <div className="tasklist_container">
        {task_list.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    )
}