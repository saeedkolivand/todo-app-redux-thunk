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

      const deletedCallback = jest.fn();
      const completedCallback = jest.fn();

      return (
        <Provider store={store}>
          <Todo
            id={uuidv4()}
            todo={todo}
            completedCallback={completedCallback}
            deleteCallback={deletedCallback}
          />
        </Provider>
      );
    };
    render(<MockTodo todo="test todo" />);

    const todoTitleElement = screen.getByText("test todo");
    expect(todoTitleElement).toBeDefined();
  });
});
