import { useState, useEffect } from 'react';
import { EnumSelect } from '../util/EnumSelect';
import type { Task } from '../../types/Task';
import type { Enum } from '../../types/Enum';
import '../../App.css';
import { getEnum } from '../../service/configService';

type Props = {
    task: Task,
    onClose: () => void;
    onSave: (task: Task) => void;
}

export const TaskView = ({task, onClose, onSave}: Props) => {
    const [taskEdit, setTaskEdit] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const [enums, setEnums] = useState<Enum[]>([]);

    useEffect(() => {
        if(!taskEdit) return;
        const fetchEnums = async () => {
            const data = await getEnum({nome: 'status'});
            setEnums(data);
        };

        fetchEnums();
    }, [taskEdit]); 

    function handleTaskSubmit(e: React.FormEvent){
        e.preventDefault();
        const newTask = {
            ...task,
            title,
            description,
            status,
        };
        onSave(newTask);
        onClose();
        setTaskEdit(false);
    }

    return (
        <div className="ModalTaskView Container">            
            {!taskEdit ? (
                <>
                    <div className="TaskView View">
                        <h2 className='TaskView taskTitle'>{title}</h2>
                        <p className='TaskView taskDescription'>{description}</p>
                        <span className='TaskView taskStatus'>{status.title}</span>
                        <button className= 'TaskView taskEdit' onClick={() => setTaskEdit(true)}>Editar task</button>
                    </div>
                </>
            ) : (
                <>
                    <form className="TaskView Edit" onSubmit={handleTaskSubmit}>
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <EnumSelect
                            options={enums}
                            value={status.id}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                const selected = enums.find(t => t.id === parseInt(e.target.value));
                                if(selected){
                                    setStatus(selected);
                                }
                            }}
                        />
                        <button type="submit">Salvar</button>
                    </form>
                </>
            )}
        </div>
    )
}