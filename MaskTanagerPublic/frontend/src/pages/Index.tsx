import { TaskList } from '../components/task/TaskList';
import { TaskAdd } from '../components/task/TaskAdd';
import { ModalWrapper } from '../components/util/ModalWrapper';
import { getTask, editTask, deleteTask, addTask } from '../service/taskService';
import { useEffect, useState } from 'react';

type Task = {
    id: number,
    title: string,
    description: string,
    isTemp?: boolean,
}

export const Index = () => {
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
            tasks.map((t) => (
                t.id === novaTask.id ? novaTask : t
            ))
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
            <TaskList tasks={tasks} onSave={handleSave} onDelete={handleDelete}/>
            <button onClick={() => {setTaskAdd(true)}}>Adicionar task?</button>            
            {taskAdd && 
            <ModalWrapper onClickModal={handleClickModal}>
                <TaskAdd onClose={() => {setTaskAdd(false)}} onAdd={handleAdd}/>
            </ModalWrapper>
            }            
        </>
    );
}