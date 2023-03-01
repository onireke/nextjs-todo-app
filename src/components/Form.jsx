import React from "react";
import { HiPlus } from "react-icons/hi";

function Form({ createTodo }) {
  return (
    <form onSubmit={createTodo} className="form-main">
      <input className="form-input" type="text" placeholder="Add Todo" />
      <button className="form-button">
        <HiPlus size={30} />
      </button>
    </form>
  );
}

export default Form;
