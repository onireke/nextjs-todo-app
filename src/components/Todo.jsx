import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function Todo({ todo, toggleComplete }) {
  return (
    <li className="todo-main">
      <div className="todo">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={
            todo.completed ? `ml-2 cursor-pointer line-through` : "task"
          }
        >
          {todo.text}
        </p>
      </div>
      <button>
        <RiDeleteBinLine />
      </button>
    </li>
  );
}

export default Todo;
