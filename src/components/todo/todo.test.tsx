import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Provider } from "react-redux";
import store from "app/store";
import Todo from "./Todo";

describe("Todo test cases", () => {
  afterAll(cleanup);

  it("should render todo on screen with passed props", () => {
    const MockTodo = (props: { todo: string }) => {
      const { todo } = props;
      return (
        <Provider store={store}>
          <Todo id={uuidv4()} todo={todo} />
        </Provider>
      );
    };
    render(<MockTodo todo="test todo" />);

    const todoTitleElement = screen.getByText("test todo");
    expect(todoTitleElement).toBeDefined();
  });
});
