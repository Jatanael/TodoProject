import React from "react";
import "./form.css";
import Container from "../containerForms/container";

const TodoForm = (props) => {
  /* const newTodo = {
    id: new Date().getTime(),
    text: todo,
    completed: false,
  }; */

  /* setTodos([...todos].concat(newTodo));
  setTodo(""); */
  return (
    <div className="container">
      <Container />
      {/* <>
      {todos.map((todo) => (
        <div>{todo.text}<div/>
      ))}
      </> */}
    </div>
  );
};

export default TodoForm;
