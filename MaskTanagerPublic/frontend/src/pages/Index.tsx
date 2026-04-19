import { TaskWidget } from '../components/widgets/TaskWidget';
import styles from './Index.module.css';


//todo
//terminar estilização do <WidgetTitle>
//estilização extremamente básica
export const Index = () => {
    return (
        <div className={styles.IndexContainer}>
            <TaskWidget/>
        </div>
    );
}