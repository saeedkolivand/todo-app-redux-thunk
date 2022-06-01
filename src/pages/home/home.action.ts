import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { DefaultRootStateTypes } from "app/reducers";
import { TodoTypes } from "./home.types";

export const AddTodoAction =
  (todo: TodoTypes) =>
  (dispatch: ThunkDispatch<DefaultRootStateTypes, void, AnyAction>) => {
    dispatch({ type: "ADD_TODO" });
    if (!todo.todo) {
      return dispatch({
        type: "ADD_TODO_FAILURE",
      });
    }
    dispatch({ type: "ADD_TODO_SUCCESS", payload: todo });
  };
