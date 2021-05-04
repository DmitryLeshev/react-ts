import { all } from "redux-saga/effects";
import { countWatcher } from "./count";
import { userWatcher } from "./user";

import actions from "../actions";

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()]);
}

export default {
  fetchUsersSaga: actions.user.fetchUsersSaga,
  ...actions.count,
};
