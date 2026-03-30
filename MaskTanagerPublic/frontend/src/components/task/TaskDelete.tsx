import '../../App.css';
import type { Task } from '../../types/Task';

type Props = {
    task: Task,
    onClose: () => void;
    onDelete: (id: number) => void;
}

export const TaskDelete = ({task, onClose, onDelete}: Props) => {
    const handleTaskDelete = () => {
        onDelete(task.id);
        onClose();
    }

    return (
        <div className="ModalTaskDelete ModalContainer">
            <div className="ModalTaskDelete">
                <h3 className="TaskDelete Title">Deletar task {task.id}?</h3>
                <button className="TaskDelete Confirm" onClick={handleTaskDelete}>Deletar</button>
                <button className="TaskDelete Cancel" onClick={onClose}>Cancelar</button>
            </div>
        </div>
    )
}