import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { DefaultRootStateTypes } from "app/reducers";
import {
  AddTodoTypesEnums,
  ChangeTodoStatusTypesEnums,
  DeleteTodoTypesEnums,
  TodoStatusTypes,
  TodoTypes,
} from "./home.types";

export const AddTodoAction =
  (todo: TodoTypes) =>
  (dispatch: ThunkDispatch<DefaultRootStateTypes, void, AnyAction>) => {
    dispatch({ type: AddTodoTypesEnums.ADD_TODO });
    if (!todo.todo) {
      return dispatch({
        type: AddTodoTypesEnums.ADD_TODO_FAILURE,
      });
    }
    dispatch({ type: AddTodoTypesEnums.ADD_TODO_SUCCESS, payload: todo });
  };

export const DeleteTodoAction =
  (id: string) =>
  (dispatch: ThunkDispatch<DefaultRootStateTypes, void, AnyAction>) => {
    dispatch({ type: DeleteTodoTypesEnums.DELETE_TODO });
    if (!id) {
      return dispatch({
        type: DeleteTodoTypesEnums.DELETE_TODO_FAILURE,
      });
    }
    dispatch({
      type: DeleteTodoTypesEnums.DELETE_TODO_SUCCESS,
      payload: { id },
    });
  };

export const ChangeTodoStatusAction =
  (id: string, status: TodoStatusTypes) =>
  (dispatch: ThunkDispatch<DefaultRootStateTypes, void, AnyAction>) => {
    dispatch({ type: ChangeTodoStatusTypesEnums.CHANGE_TODO_STATUS });
    if (!status || !status) {
      return dispatch({
        type: ChangeTodoStatusTypesEnums.CHANGE_TODO_STATUS_FAILURE,
      });
    }
    dispatch({
      type: ChangeTodoStatusTypesEnums.CHANGE_TODO_STATUS_SUCCESS,
      payload: { id, status },
    });
  };
