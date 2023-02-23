import React from "react";
import { HiPlus } from "react-icons/hi";

function Form() {
  return (
    <div className="form-main">
      <input className="form-input" type="text" placeholder="Add Todo" />
      <button className="form-button">
        <HiPlus size={30} />
      </button>
    </div>
  );
}

export default Form;
