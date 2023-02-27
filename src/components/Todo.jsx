import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function Todo({ todo }) {
  return (
    <li className="todo-main">
      <div className="todo">
        <input type="checkbox" name="" id="" />
        <p className="task">{todo.text}</p>
      </div>
      <button>
        <RiDeleteBinLine />
      </button>
    </li>
  );
}

export default Todo;
