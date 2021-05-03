import {
  AppState,
  AppAction,
  AppActionTypes,
  Languages,
  Modes,
} from "../types/app";

const initialState: AppState = {
  ready: false,
  isLogged: true,
  isOpenChat: false,
  lang: Languages.EN,
  theme: {
    mode: Modes.DARK,
    colors: {
      primary: "#2196f3",
      secondary: "#f50057",
    },
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
      return { ...state, theme: { ...state.theme, mode: action.payload } };

    case AppActionTypes.CHANGE_COLORS:
      return { ...state, theme: { ...state.theme, colors: action.payload } };

    case AppActionTypes.CHANGE_CHAT:
      return { ...state, isOpenChat: !state.isOpenChat };

    default:
      return state;
  }
};
