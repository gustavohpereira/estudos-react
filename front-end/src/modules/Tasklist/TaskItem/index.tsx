import { Task } from "../../../Models/Models";
import './TaskItem_style.scss'

interface TaskItemProps {
    task: Task;
  }
  
  export function TaskItem({ task }: TaskItemProps){
    return(
        <div className="task">
            <h4 className="task_title">{task.title}</h4>
            <p className="task_description">{task.description}</p>
        </div>
    )
}