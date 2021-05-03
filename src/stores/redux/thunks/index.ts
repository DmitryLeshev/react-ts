import * as UserAction from "./user";
import * as TodoAction from "./todo";
import * as AppAction from "./app";
import * as CountAction from "./count";

export default {
  ...AppAction,
  ...UserAction,
  ...TodoAction,
  ...CountAction,
};
