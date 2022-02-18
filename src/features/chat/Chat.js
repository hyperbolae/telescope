import styles from './Chat.module.css';
import {useSelector} from 'react-redux';
import {selectMessages} from './chatSlice';
import ReactFlow, { Handle, Position } from 'react-flow-renderer';


const CustomNodeComponent = ({ data }) => {
    return (
        <div style={customNodeStyles}>
            <Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} />
            <div>{data.text}</div>
            <Handle type="target" position={Position.Top} style={{ borderRadius: 0 }} />
            <Handle type="target" position={Position.Right} style={{ borderRadius: 0 }} />
            <Handle type="target" position={Position.Bottom} style={{ borderRadius: 0 }} />
        </div>
    );
};

const nodeTypes = {
    special: CustomNodeComponent,
};

const customNodeStyles = {
    background: '#9CA8B3',
    color: '#FFF',
    padding: 10,
};

export function Chat() {
    const messages = useSelector(selectMessages);

    const mid_x = window.outerWidth / 2
    const mid_y = window.outerHeight / 2

    let spacing = 300
    let elements = []
    for (let message of messages) {
        elements.push({
            id: message.id.toString(),
            data: {text: message.body},
            position: {x: mid_x + message.position[0] * spacing, y: mid_y + message.position[1] * spacing},
            draggable: false,
            type: "special"
        })
        if (message.parent !== null) {
            elements.push({
                id: message.id + "-" + messages.parent,
                source: message.parent.toString(),
                target: message.id.toString()
            })
        }
    }
    return (
        <div className={styles.cell}>
            <ReactFlow elements={elements} nodeTypes={nodeTypes} />
        </div>
    )
}
