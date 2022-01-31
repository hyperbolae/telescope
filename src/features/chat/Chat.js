import styles from './Chat.module.css';
import { useSelector } from 'react-redux';
import { selectMessages } from './chatSlice';
import ReactFlow from 'react-flow-renderer';

export function Chat() {
    const messages = useSelector(selectMessages);



    const elements = [
        { id: '1', data: { label: <div><input type="text" className={styles.message}/></div> }, position: { x: window.outerWidth / 2, y:  window.outerHeight / 2 } }
    ];

    return (
        <div className={styles.cell}>
            <ReactFlow elements={elements} />
        </div>
    )
}
