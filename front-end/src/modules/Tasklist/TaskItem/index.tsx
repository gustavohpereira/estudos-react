import { useState } from "react";
import { Task } from "../../../Models/Models";
import './TaskItem_style.scss'

interface TaskItemProps {
    task: Task;
    theme: string
  }
  
  
  export function TaskItem(props: TaskItemProps){

    const [isSelected, setIsSelected] = useState(false); // Add state for selection

    const toggleSelection = () => {
      setIsSelected(!isSelected);
    };

    
    return(
        <div className={`task ${props.theme} ${isSelected ? 'selected' : ''} `} onClick = {toggleSelection} >
            <h3 className="task_title">{props.task.title}</h3>
            <p className="task_description">{props.task.description}</p>
        </div>
    )
}