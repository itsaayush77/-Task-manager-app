import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleComplete, setEditingTask }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && <li>No tasks available</li>}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setEditingTask={setEditingTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;