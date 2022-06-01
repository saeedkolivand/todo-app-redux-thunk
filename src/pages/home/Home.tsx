import React, { FormEvent, useState } from "react";
import Container from "ui-components/container/Container";
import Input from "ui-components/input/Input";
import Divider from "ui-components/divider/Divider";
import Todo from "components/todo/Todo";
import { useDispatch, useSelector } from "app/hooks";
import Button from "ui-components/button/Button";
import { v4 as uuidv4 } from "uuid";
import { HomePropsTypes } from "./home.types";
import "./home.style.scss";
import { AddTodoAction } from "./home.action";

const Home: React.FC<HomePropsTypes> = () => {
  const { todos, hasError, loading } = useSelector(
    (state) => state.TodosReducer
  );

  const [todoValue, setTodoValue] = useState("");

  const handleInputChange = (event: FormEvent<HTMLInputElement>) =>
    setTodoValue(event.currentTarget.value);

  const dispatch = useDispatch();

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

  return (
    <Container className="home-wrapper" loading={loading} hasError={hasError}>
      <h1 className="home--header">Todos</h1>
      <form onSubmit={handleAddTodo} className="flex-center">
        <Input
          value={todoValue}
          placeholder="Add new todo"
          onChange={handleInputChange}
        />
        <Button type="submit">Add</Button>
      </form>
      <Divider />
      {todos?.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </Container>
  );
};

export default Home;
