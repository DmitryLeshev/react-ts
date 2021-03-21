import * as UserAction from "./userActions";
import * as TodoAction from "./todosActions";

// eslint-disable-next-line
export default {
  ...UserAction,
  ...TodoAction,
};
