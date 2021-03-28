import * as UserAction from "./user";
import * as TodoAction from "./todo";
import * as AppAction from "./app";

// eslint-disable-next-line
export default {
  ...AppAction,
  ...UserAction,
  ...TodoAction,
};
