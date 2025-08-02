import React from "react";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <p>{task.text}</p>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
