import { useState } from 'react';
import '../../App.css';

type Task = {
    id: number,
    title: string,
    description: string,
}

type Props = {
    task: Task,
    onClose: () => void;
    onSave: (task: Task) => void;
}

export const TaskView = ({task, onClose, onSave}: Props) => {
    const [taskEdit, setTaskEdit] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    

    function handleTaskSubmit(){
        onSave({id: task.id, title: title, description: description});
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
                        <button className= 'TaskView taskEdit' onClick={() => setTaskEdit(true)}>Editar task</button>
                    </div>
                </>
            ) : (
                <>
                    <form className="TaskView Edit" onSubmit={handleTaskSubmit}>
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <button type="submit">Salvar</button>
                    </form>
                </>
            )}
        </div>
    )
}