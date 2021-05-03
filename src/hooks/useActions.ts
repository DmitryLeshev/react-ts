import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import ActionCreatorsThunks from "../stores/redux/thunks";
import ActionCreatorsSagas from "../stores/redux/sagas";

const ActionCreators = { ...ActionCreatorsThunks, ...ActionCreatorsSagas };

export default () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
