function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => toggleTodo(todo.id)}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {}}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-btn"
        aria-label="Delete task"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;