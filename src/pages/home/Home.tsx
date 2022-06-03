import React, { FormEvent, useEffect, useState } from "react";
import Container from "ui-components/container/Container";
import Input from "ui-components/input/Input";
import Divider from "ui-components/divider/Divider";
import Todo from "components/todo/Todo";
import { useDispatch, useSelector } from "app/hooks";
import Button from "ui-components/button/Button";
import { v4 as uuidv4 } from "uuid";
import { HomePropsTypes, TodoStatusTypes } from "./home.types";
import "./home.style.scss";
import {
  AddTodoAction,
  ChangeTodoStatusAction,
  DeleteTodoAction,
} from "./home.action";

const Home: React.FC<HomePropsTypes> = () => {
  const { todos, hasError, loading } = useSelector(
    (state) => state.TodosReducer
  );

  const [todoValue, setTodoValue] = useState("");

  const handleInputChange = (event: FormEvent<HTMLInputElement>) =>
    setTodoValue(event.currentTarget.value);

  const dispatch = useDispatch();

  useEffect(() => {
    setTodoValue("");
  }, [todos]);

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      AddTodoAction({
        id: uuidv4(),
        todo: todoValue,
        status: "todo",
      })
    );
  };

  const handleDeleteTodo = (id: string) => dispatch(DeleteTodoAction(id));

  const handleChangeStatus = (id: string, status: TodoStatusTypes) =>
    dispatch(ChangeTodoStatusAction(id, status));

  return (
    <Container className="home-wrapper" loading={loading} hasError={hasError}>
      <h1 className="home-wrapper--header">Todos</h1>
      <form
        onSubmit={handleAddTodo}
        className="home-wrapper--todo-input flex-center"
      >
        <Input
          value={todoValue}
          placeholder="Add new todo"
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add</Button>
      </form>
      <Divider />
      {todos?.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          deleteCallback={handleDeleteTodo}
          completedCallback={handleChangeStatus}
        />
      ))}
    </Container>
  );
};

export default Home;
