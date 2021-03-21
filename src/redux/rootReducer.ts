import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
