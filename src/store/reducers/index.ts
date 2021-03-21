import { combineReducers } from "redux";
import { userReducer } from "./user";
import { todosReducer } from "./todo";

export const reducers = combineReducers({
  user: userReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof reducers>;
