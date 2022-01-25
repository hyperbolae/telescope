import styles from './Chat.module.css';
import { useSelector } from 'react-redux';
import { selectMessages } from './chatSlice';

export function Chat() {
    const messages = useSelector(selectMessages);
    return (
        <div className={styles.cell}>
            This is something {messages}
        </div>
    )
}
