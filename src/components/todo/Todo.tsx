import React from "react";
import Button from "ui-components/button/Button";
import { ReactComponent as CompletedIcon } from "assets/images/tick-circle.svg";
import { ReactComponent as DeleteIcon } from "assets/images/close-circle.svg";
import { useDispatch } from "app/hooks";
import {
  ChangeTodoStatusAction,
  DeleteTodoAction,
} from "pages/home/home.action";
import { TodoPropsTypes } from "./todo.types";
import "./todo.style.scss";

const Todo: React.FC<TodoPropsTypes> = (props) => {
  const { className = "", status, id, todo } = props;

  const dispatch = useDispatch();

  const todoStatusClassName =
    status === "todo" ? "todo--active" : "todo--completed";

  const handleDelete = () => dispatch(DeleteTodoAction(id));

  const handleChangeStatus = () =>
    dispatch(ChangeTodoStatusAction(id, status === "todo" ? "done" : "todo"));

  return (
    <div className={`todo-box flex-center ${todoStatusClassName} ${className}`}>
      <div className="todo-box--title">{todo}</div>
      <div className="todo-box--actions-wrapper flex-center">
        <Button onClick={handleDelete}>
          <DeleteIcon />
        </Button>
        <Button onClick={handleChangeStatus}>
          <CompletedIcon />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
