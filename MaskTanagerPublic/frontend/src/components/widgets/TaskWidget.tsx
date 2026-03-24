import { TaskList } from '../task/TaskList';
import { TaskAdd } from '../task/TaskAdd';
import { ModalWrapper } from '../util/ModalWrapper';
import { getTask, editTask, deleteTask, addTask } from '../../service/taskService';
import { useEffect, useState } from 'react';
import { SquarePlus } from 'lucide-react';
import type { Task } from '../../types/Task';
import styles from './TaskWidget.module.css';

export const TaskWidget = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskAdd, setTaskAdd] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getTask();
            setTasks(data);
        };

        fetchTasks();
    }, []);

    const handleSave = async (novaTask: Task) => {
        setTasks((tasks) => 
            tasks.map((t) => {
                if(t.id === novaTask.id){
                    return novaTask;
                }
                return t;
            })
        );

        await editTask(novaTask);
    }

    const handleDelete = async (id: number) => {
        setTasks((tasks) =>
            tasks.filter((t) => (
                t.id !== id
            ))
        );

        await deleteTask({id: id});
    }

    const handleAdd = async (title: string, description: string) => {
        const tempId = Date.now();
        const newTask: Task = {
            id: tempId,
            title: title,
            description: description,
            status: 2,
            isTemp: true,
        };

        setTasks((prev) => [...prev, newTask]);

        try{
            const createdTask = await addTask({title, description });
            setTasks((prev) => prev.map((t) => t.isTemp ? createdTask : t))
        } catch (err) {
            console.log('erro ao criar task', err);
            setTasks((prev) => prev.filter((t) => !t.isTemp));
        }
    }

    const handleClickModal = () => {
        setTaskAdd(false);
    }

    return (
        <>
            <div className={styles.TaskWidget}>
                <TaskList tasks={tasks} onSave={handleSave} onDelete={handleDelete}/>
                <button className={`${styles.TaskAdd} btn btn-primary`} onClick={() => {setTaskAdd(true)}}>Adicionar task <SquarePlus size={16} color={'black'} strokeWidth={3}/></button>            
                {taskAdd && 
                <ModalWrapper onClickModal={handleClickModal}>
                    <TaskAdd onClose={() => {setTaskAdd(false)}} onAdd={handleAdd}/>
                </ModalWrapper>
                }            
            </div>
        </>
    );
}