import { combineReducers } from "@reduxjs/toolkit";
import TodosReducer from "pages/home/home.reducer";

const reducerApp = combineReducers({
  TodosReducer,
});

export default reducerApp;
