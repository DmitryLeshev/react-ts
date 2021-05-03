import actions from "../actions";
import { put, takeEvery } from "redux-saga/effects";
import { CountActionTypes } from "../types/count";

const { decrementCreator, incrementCreator } = actions.count;
const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(CountActionTypes.ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(CountActionTypes.ASYNC_DECREMENT, decrementWorker);
}
