import {
  AddTodoTypesEnums,
  DeleteTodoTypesEnums,
  EditTodoTypesEnums,
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
    case EditTodoTypesEnums.EDIT_TODO:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case EditTodoTypesEnums.EDIT_TODO_SUCCESS: {
      const todo = state.todos!.findIndex(
        (value) => value.id === action?.payload?.id
      );
      if (todo && state.todos && state.todos[todo]) {
        state.todos[todo] = <TodoTypes>action.payload;
      }
      return {
        ...state,
        loading: false,
      };
    }
    case EditTodoTypesEnums.EDIT_TODO_FAILURE: {
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
      const todo = state.todos?.findIndex(
        (value) => value.id === action.payload?.id
      );
      if (todo && state.todos && state.todos[todo]) {
        console.log("sdasd");
        state.todos.splice(0, todo);
      }
      return {
        ...state,
        loading: false,
      };
    }
    case DeleteTodoTypesEnums.DELETE_TODO_FAILURE: {
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
