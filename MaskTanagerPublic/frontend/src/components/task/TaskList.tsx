import { useState } from 'react';
import { ModalWrapper } from '../util/ModalWrapper';
import { TaskView } from './TaskView';
import { TaskDelete } from './TaskDelete';
import '../../App.css';

type Task = {
    id: number,
    title: string,
    description: string,
    isTemp?: boolean,
}

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

    return (
    <ul className='List TaskList'>
        {tasks.map((task, i) => (
            <li className='task' key={i}>
                <div className='task-attr AttrTaskId'>
                    <h3 className={'taskId ' + (task.isTemp && 'hide')}>{task.id}</h3>
                </div>
                <div className='task-attr AttrTaskTitle'>
                    <h3 className='taskTitle'>{task.title}</h3>
                </div>
                <div className='task-attr AttrTaskDescription'>
                    <p className='taskDescription'>{task.description}</p>
                </div>
                <button className='taskButton' onClick={() => setTaskView(task)}>Ver Task</button>
                {!taskDelete ? (
                    <>
                        <button className='taskButton deleteTask' onClick={() => setTaskDelete(task)}>Deletar Task</button>
                    </>
                ) : (
                    <>
                        <ModalWrapper onClickModal={handleClose}>
                            <TaskDelete 
                                task={taskDelete}
                                onClose={handleClose}
                                onDelete={onDelete}
                            />
                        </ModalWrapper>
                    </>
                )}
            </li>
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
    </ul>)
};