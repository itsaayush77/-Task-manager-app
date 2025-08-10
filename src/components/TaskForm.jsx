import { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, editingTask, setEditingTask }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    } else {
      setText('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (editingTask) {
      editTask(editingTask.id, text);
    } else {
      addTask(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">{editingTask ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;