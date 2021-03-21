import axios from "axios";
import { Dispatch } from "react";
import { TodoAction, Todo, TodoActionTypes } from "./rootTypes";
import { RootState } from "./rootReducer";
// interface IFetchOptions {
//   limit: number;
//   page: number;
// }

export const fetchTodos = () => async (
  dispatch: Dispatch<TodoAction>,
  getState: () => RootState
) => {
  try {
    dispatch({ type: TodoActionTypes.FETCH_TODOS });
    const { limit, page } = getState().todos;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    );
    const todos: Todo[] = response.data;
    dispatch({
      type: TodoActionTypes.FETCH_TODOS_SUCCESS,
      payload: todos,
    });
  } catch (error) {
    dispatch({
      type: TodoActionTypes.FETCH_TODOS_ERROR,
      payload: "Произошла ошибка при загрузке задач",
    });
  }
};
