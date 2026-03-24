import { useState } from 'react';
import { ModalWrapper } from '../util/ModalWrapper';
import { TaskView } from './TaskView';
import { TaskDelete } from './TaskDelete';
import { TaskListItem } from './TaskListItem';
import type { Task } from '../../types/Task';
import style from './TaskList.module.css';

type Props = {
    tasks: Task[];
    onSave: (task: Task) => void;
    onDelete: (id: number) => void;
}

export const TaskList = ({tasks, onSave, onDelete}: Props) => {
    const [taskView, setTaskView] = useState<Task | null>(null);
    const [taskDelete, setTaskDelete] = useState<Task | null>(null);

    const handleClose = () => {
        setTaskView(null);
        setTaskDelete(null);
    }

    const handleClickTask = (task: Task) => {
        setTaskView(task);
    }

    const handleClickDelete = (task: Task) => {
        setTaskDelete(task);
    }

    return (
    <ul className={`${style.TaskList}`}>
        {tasks.map((task) => (
            <TaskListItem 
                task={task}
                onClickTask={handleClickTask} 
                onClickDelete={handleClickDelete}/>
        ))}
        {taskView && (
            <ModalWrapper onClickModal={handleClose}>
                <TaskView 
                    task={taskView}
                    onClose={handleClose}
                    onSave={onSave}
                />
            </ModalWrapper>
        )}
        {taskDelete && (
            <ModalWrapper onClickModal={handleClose}>
                <TaskDelete
                    task={taskDelete}
                    onDelete={onDelete}
                    onClose={handleClose}
                />
            </ModalWrapper>
        )}
    </ul>
    )
};