import { Task } from "../../../Models/Models";
import './TaskItem_style.scss'

interface TaskItemProps {
    task: Task;
    theme: string
  }
  
  export function TaskItem(props: TaskItemProps){
    return(
        <div className={`task ${props.theme}` }>
            <h3 className="task_title">{props.task.title}</h3>
            <p className="task_description">{props.task.description}</p>
        </div>
    )
}