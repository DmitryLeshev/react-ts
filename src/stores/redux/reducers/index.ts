import { combineReducers } from "redux";
import { userReducer } from "./user";
import { todosReducer } from "./todo";
import { appReducer } from "./app";
import { countReducer } from "./count";

export const reducers = combineReducers({
  user: userReducer,
  todos: todosReducer,
  app: appReducer,
  count: countReducer,
});

export type RootState = ReturnType<typeof reducers>;
