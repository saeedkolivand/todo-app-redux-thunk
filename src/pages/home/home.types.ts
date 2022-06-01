import { AppRouterTypes } from "routes/appRouter.types";

export interface HomePropsTypes extends AppRouterTypes {}

export interface TodoTypes {
  id: string;
  todo: string;
  status?: "todo" | "done";
}

export interface ReduxInitialStateTypes {
  todos?: TodoTypes[];
  loading: boolean;
  hasError: boolean;
}

export enum AddTodoTypesEnums {
  ADD_TODO = "ADD_TODO",
  ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE = "ADD_TODO_FAILURE",
  SHOW_LOADING = "SHOW_LOADING",
}

export enum EditTodoTypesEnums {
  EDIT_TODO = "EDIT_TODO",
  EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS",
  EDIT_TODO_FAILURE = "EDIT_TODO_FAILURE",
}

export enum DeleteTodoTypesEnums {
  DELETE_TODO = "DELETE_TODO",
  DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS",
  DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE",
}
