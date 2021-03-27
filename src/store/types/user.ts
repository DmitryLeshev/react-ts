import { Action } from ".";

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface User {
  id: number;
  name: string;
  isOnline: boolean;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export interface FetchUsersAction extends Action {
  type: UserActionTypes.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}

export interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
