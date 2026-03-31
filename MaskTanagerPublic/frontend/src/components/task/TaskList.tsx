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
    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => {
        setTaskView(null);
        setTaskDelete(null);
        setOpenModal(false);
    }

    return (
    <>
        <ul className={`${style.TaskList}`}>
            {tasks.map((task) => (
                <TaskListItem 
                    key={task.id}
                    task={task}
                    onClickTask={() => {setTaskView(task); setOpenModal(true)}} 
                    onClickDelete={() => {setTaskDelete(task); setOpenModal(true)}}/>
            ))}        
        </ul>
        <ModalWrapper isOpen={openModal} onClickModal={handleClose}>
        {taskView && (            
        <TaskView 
                task={taskView}
                onClose={handleClose}
                onSave={onSave}
            />
        )}
        {taskDelete && (
            <TaskDelete
                task={taskDelete}
                onDelete={onDelete}
                onClose={handleClose}
            />
        )}
        </ModalWrapper>
    </>
    )
};