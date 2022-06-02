import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { DefaultRootStateTypes } from "./reducers";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () =>
  useAppDispatch<ThunkDispatch<DefaultRootStateTypes, void, AnyAction>>();
export const useSelector: TypedUseSelectorHook<DefaultRootStateTypes> =
  useAppSelector;
