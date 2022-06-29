import React, { useState } from "react";
import Button from "../button/button";
import { FiX } from "react-icons/fi";
import "./container.css";

const Container = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Add a task here..."
          />
          <Button />
        </label>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div>{todo.text}</div>
          <button onClick={() => deleteTodo(todo.id)}>
            <FiX className="icon2" color="#1f6feb" />
          </button>
        </div>
      ))}
    </>
  );
};

export default Container;
