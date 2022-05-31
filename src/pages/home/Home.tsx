import React from "react";
import Container from "ui-components/container/Container";
import Input from "ui-components/input/Input";
import Divider from "ui-components/divider/Divider";
import Todo from "components/todo/Todo";
import { HomePropsTypes } from "./home.types";
import "./home.style.scss";

const Home: React.FC<HomePropsTypes> = () => {
  return (
    <Container className="home-wrapper">
      <h1 className="home--header">Todos</h1>
      <Input placeholder="Add new todo" />
      <Divider />
      <Todo>asdadasD</Todo>
    </Container>
  );
};

export default Home;
