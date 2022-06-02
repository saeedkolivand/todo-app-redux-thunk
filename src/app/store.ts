import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import reducerApp from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducerApp, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;

export default store;
