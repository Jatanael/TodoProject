import React from "react";
import { FaPlus } from "react-icons/fa";
import "./form.css";

const TodoForm = (props) => {
  return (
    <div className="container">
      <form>
        <label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Add a task here..."
          />
          <div className="button">
            <button className="button-icon">
              <FaPlus className="icon" color="white" />
            </button>
          </div>
        </label>
      </form>
    </div>
  );
};

export default TodoForm;
