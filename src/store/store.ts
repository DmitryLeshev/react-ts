import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import services from "../services";
// import middlewares from "./middlewares";
import { reducers } from "./reducers";

const composeEnhancers =
  ((window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
  compose;

// export const configureStore = (services: any, middlewares: any) =>
//   createStore(
//     reducers,
//     composeEnhancers(
//       applyMiddleware(thunk, ...middlewares.map((f: any) => f(services)))
//     )
//   );

// export const store = configureStore(services, middlewares);

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);
