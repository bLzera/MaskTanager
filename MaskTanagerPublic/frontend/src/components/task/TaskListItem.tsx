import { Trash } from 'lucide-react';
import type { Task } from '../../types/Task';
import style from './TaskListItem.module.css';

type Props = {
    task: Task;
    onClickDelete: (task: Task) => void;
    onClickTask: (task: Task) => void;
}

export const TaskListItem = ({task, onClickDelete, onClickTask}: Props) => {
    const getStatusColor = (task: Task) => {                
        if(!task.isTemp) {
            switch (task.status.id){
                case 1: return style.concluida;
                case 2: return style.pendente;
                case 3: return style.cancelada;
                default: return 'default';
            }
        }
        return style.pendente;
    }

    return (
        <li onClick={() => onClickTask(task)} className={`${style.Task} ${task && getStatusColor(task)}`}>
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