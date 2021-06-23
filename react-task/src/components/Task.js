import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={(e) => {e.preventDefault(); onToggle(task.id)}}>
            <h3>{task.text} <FaTimes className="cancel-btn" style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
