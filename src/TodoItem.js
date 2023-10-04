import React, { useState } from 'react';

function TodoItem({ task, index, removeTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(index, editedTask);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {task}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={removeTask}>Remove</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
