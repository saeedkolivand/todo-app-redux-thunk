import React from "react";
import { TodoPropsTypes } from "./todo.types";
import "./todo.style.scss";

const Todo: React.FC<TodoPropsTypes> = (props) => {
  const { className, status } = props;

  const todoStatusClassName =
    status === "active" ? "todo--active" : "todo--completed";

  return (
    <div className={`todo-box flex-center ${todoStatusClassName} ${className}`}>
      <div className="todo-box--title">title</div>
      <div className="todo-box--actions-wrapper">status wrapper</div>
    </div>
  );
};

export default Todo;
