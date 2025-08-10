const TaskItem = ({ task, deleteTask, toggleComplete, setEditingTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <div>
        <button className="edit" onClick={() => setEditingTask(task)}>Edit</button>
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;