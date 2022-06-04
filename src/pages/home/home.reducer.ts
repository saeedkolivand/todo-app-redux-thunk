import {
  AddTodoTypesEnums,
  ChangeTodoStatusTypesEnums,
  DeleteTodoTypesEnums,
  ReduxInitialStateTypes,
  TodoTypes,
} from "./home.types";

const initialState: ReduxInitialStateTypes = {
  todos: [],
  loading: false,
  hasError: false,
};

const TodosReducer = (
  state = initialState,
  action: { type: string; payload?: TodoTypes }
) => {
  switch (action.type) {
    case AddTodoTypesEnums.ADD_TODO:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case AddTodoTypesEnums.ADD_TODO_SUCCESS: {
      return {
        todos: [...state.todos!, action.payload],
        loading: false,
      };
    }
    case AddTodoTypesEnums.ADD_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    }
    case DeleteTodoTypesEnums.DELETE_TODO:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case DeleteTodoTypesEnums.DELETE_TODO_SUCCESS: {
      const temp: TodoTypes[] = [];
      state.todos?.forEach((item) => {
        if (item.id !== action.payload?.id) temp.push(item);
      });

      return {
        todos: [...temp],
        loading: false,
        hasError: false,
      };
    }
    case DeleteTodoTypesEnums.DELETE_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    }
    case ChangeTodoStatusTypesEnums.CHANGE_TODO_STATUS:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case ChangeTodoStatusTypesEnums.CHANGE_TODO_STATUS_SUCCESS: {
      state.todos?.forEach((item) => {
        if (item.id === action.payload?.id) {
          item.status = action.payload.status;
        }
      });

      return {
        ...state,
        loading: false,
      };
    }
    case ChangeTodoStatusTypesEnums.CHANGE_TODO_STATUS_FAILURE: {
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    }
    case AddTodoTypesEnums.SHOW_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default TodosReducer;
