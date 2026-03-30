import { useState } from 'react';

type Props = {
    onClose: () => void;
    onAdd: (title: string, description: string, e: React.FormEvent<HTMLFormElement>) => void;
}

export const TaskAdd = ({onClose, onAdd}: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        onAdd(title, description, e);
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