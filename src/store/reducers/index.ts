import { combineReducers } from "redux";
import { userReducer } from "./user";
import { todosReducer } from "./todo";
import { appReducer } from "./app";

export const reducers = combineReducers({
  user: userReducer,
  todos: todosReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof reducers>;
