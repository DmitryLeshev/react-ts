import axios from "axios";
import { Dispatch } from "react";
import { User, UserAction, UserActionTypes } from "../types/user";

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users: User[] = response.data;
    dispatch({
      type: UserActionTypes.FETCH_USERS_SUCCESS,
      payload: users,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: "Произошла ошибка при загрузке пользователей",
    });
  }
};
