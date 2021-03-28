import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../store/actions";

export default () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
