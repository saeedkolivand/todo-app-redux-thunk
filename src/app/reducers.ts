import { combineReducers, Reducer } from "redux";
import TodosReducer from "pages/home/home.reducer";
import { ReduxInitialStateTypes } from "pages/home/home.types";

const reducerApp: Reducer = combineReducers({
  TodosReducer,
});

export default reducerApp;

export interface DefaultRootStateTypes {
  TodosReducer: ReduxInitialStateTypes;
}
