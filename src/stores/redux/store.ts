import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";
import { rootWatcher } from "./sagas";

const composeEnhancers =
  ((window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(rootWatcher);
