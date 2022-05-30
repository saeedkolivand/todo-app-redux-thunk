import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "pages/home/home.reducer";

const store = configureStore({
  reducer: {
    TodosReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
