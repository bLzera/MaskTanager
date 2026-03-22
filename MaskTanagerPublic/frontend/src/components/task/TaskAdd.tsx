import { useState } from 'react'

type Task = {
    id: number,
    title: string,
    description: string,
    isTemp?: boolean,
}

type Props = {
    onClose: () => void;
    onAdd: (title: string, description: string) => void;
}

export const TaskAdd = ({onClose, onAdd}: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTaskSubmit = () => {
        onAdd(title, description);
        onClose();
    }

    return (
        <form className="Form TaskAddForm" onSubmit={handleTaskSubmit}>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">Adicionar</button>
            <button onClick={onClose}>Cancelar</button>
        </form>
    )
}