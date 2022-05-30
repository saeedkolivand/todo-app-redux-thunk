import { AppDispatch } from "app/store";
import { AddTodoTypesEnums, TodoTypes } from "./home.types";

export const AddTodoAction = (todo: TodoTypes) => (dispatch: AppDispatch) => {
  dispatch({ type: AddTodoTypesEnums.ADD_TODO });
  if (!todo.todo) {
    return dispatch({ type: AddTodoTypesEnums.ADD_TODO_FAILURE });
  }
  dispatch({ type: AddTodoTypesEnums.ADD_TODO_SUCCESS, payload: todo });
};
