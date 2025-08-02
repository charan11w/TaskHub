import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, toggleCompleted } from "../../utils/TodoSlice";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList() {
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAdd = () => {
    dispatch(addTask({ text }));
    setText("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="add-task">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAdd}>Add</button>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={(id) => dispatch(deleteTask(id))}
            toggleCompleted={(id) => dispatch(toggleCompleted(id))}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
