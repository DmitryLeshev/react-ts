import { Lang, Colors, Mode, AppChangeChat } from "../types/app";
import {
  AppActionTypes,
  AppReady,
  AppChangeColors,
  AppChangeMode,
  AppChangeLanguage,
} from "../types/app";

const ready = (boolean: boolean): AppReady => ({
  type: AppActionTypes.READY,
  payload: boolean,
});

const changeColor = (colors: Colors): AppChangeColors => ({
  type: AppActionTypes.CHANGE_COLORS,
  payload: colors,
});

const changeMode = (mode: Mode): AppChangeMode => ({
  type: AppActionTypes.CHANGE_MODE_THEME,
  payload: mode,
});

const changeLang = (lang: Lang): AppChangeLanguage => ({
  type: AppActionTypes.CHANGE_LANGUAGE,
  payload: lang,
});

const changeChat = (): AppChangeChat => ({
  type: AppActionTypes.CHANGE_CHAT,
});

export default { ready, changeColor, changeMode, changeLang, changeChat };
