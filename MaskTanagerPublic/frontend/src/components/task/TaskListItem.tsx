import { Trash } from 'lucide-react';
import style from './TaskListItem.module.css';

type Task = {
    id: number,
    title: string,
    description: string,
    isTemp?: boolean,
}

type Props = {
    task: Task;
    onClickDelete: (task: Task) => void;
    onClickTask: (task: Task) => void;
}

export const TaskListItem = ({task, onClickDelete, onClickTask}: Props) => {
    return (
        <li onClick={() => onClickTask(task)} className={style.Task} key={task.id}>
            <div className={`${style.TaskAttr} ${style.TaskAttrId}`}>
                <h3 className={`${style.Id} ${task.isTemp && 'hide'}`}>{task.id}</h3>
            </div>
            <div className={`${style.TaskAttr} ${style.TaskAttrTitle}`}>
                <h3 className={style.Title}>{task.title}</h3>
            </div>
            <div className={`${style.TaskAttr} ${style.TaskAttrDescription}`}>
                <p className={style.Description}>{task.description}</p>
            </div>
            <button 
                className={`${style.DeleteTask} btn btnDelete`} 
                onClick={(e) => {
                    e.stopPropagation();
                    onClickDelete(task)
                }}
            ><Trash/></button>
        </li>
    )
}