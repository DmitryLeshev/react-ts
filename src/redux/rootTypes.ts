export interface Action {
  type: string;
  payload?: any;
}

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

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}

export interface Todo {
  id: number;
  title: string;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: null | string;
  limit: number;
  page: number;
}

export interface FetchTodosAction extends Action {
  type: TodoActionTypes.FETCH_TODOS;
}

export interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

export interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

export type TodoAction =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction;
