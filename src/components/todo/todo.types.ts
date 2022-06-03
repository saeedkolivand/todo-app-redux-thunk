import { TodoStatusTypes, TodoTypes } from "pages/home/home.types";

export interface TodoPropsTypes extends TodoTypes {
  className?: string;
  deleteCallback: (id: string) => void;
  completedCallback: (id: string, status: TodoStatusTypes) => void;
}
