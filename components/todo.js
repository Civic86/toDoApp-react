import React from "react";

function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </div>
  );
}

export default Todo;
