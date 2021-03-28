import { Languages } from "../../types/Languages";
import { Modes } from "../../types/Theme";
import { AppState, AppAction, AppActionTypes } from "../types/app";

const initialState: AppState = {
  ready: false,
  lang: Languages.EN,
  mode: Modes.DARK,
  colors: {
    primary: "#2196f3",
    secondary: "#f50057",
  },
};

export const appReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionTypes.READY:
      return { ...state, ready: action.payload };

    case AppActionTypes.CHANGE_LANGUAGE:
      return { ...state, lang: action.payload };

    case AppActionTypes.CHANGE_MODE_THEME:
      return { ...state, mode: action.payload };

    case AppActionTypes.CHANGE_COLORS:
      return { ...state, colors: action.payload };

    default:
      return state;
  }
};
