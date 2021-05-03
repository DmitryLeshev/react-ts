import { all } from "redux-saga/effects";
import { helloSaga } from "./sagas";
import { countWatcher } from "./count";
import { userWatcher } from "./user";

import actions from "../actions";

export function* rootWatcher() {
  yield all([helloSaga(), countWatcher()]);
}

export default {
  fetchUsersLoading: actions.user.fetchUsersLoading,
  ...actions.count,
};
