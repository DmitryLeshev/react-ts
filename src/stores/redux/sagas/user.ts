import actions from "../actions";
import { put, takeEvery, call } from "redux-saga/effects";
import { User, UserActionTypes } from "../types/user";

const { fetchUsersLoading, fetchUsersSuccess } = actions.user;

const fetchUsersFromApi = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=10`
  );
  return res.json();
};

function* fetchUserWorker() {
  yield put(fetchUsersLoading());
  const users: User[] = yield call(fetchUsersFromApi);
  yield put(fetchUsersSuccess(users));
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.FETCH_USERS_SAGA, fetchUserWorker);
}
