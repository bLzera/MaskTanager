import { TaskWidget } from '../components/widgets/TaskWidget';
import styles from './Index.module.css';

export const Index = () => {
    return (
        <div className={styles.IndexContainer}>
            <TaskWidget/>
        </div>
    );
}