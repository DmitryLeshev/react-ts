import * as UserAction from "./user";
import * as TodoAction from "./todo";

// eslint-disable-next-line
export default {
  ...UserAction,
  ...TodoAction,
};
