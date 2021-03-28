import { Dispatch } from "react";
import { Lang } from "../../types/Languages";
import { Colors, Mode } from "../../types/Theme";
import { RootState } from "../reducers";
import {
  AppActionTypes,
  AppReady,
  AppChangeColors,
  AppChangeMode,
  AppChangeLanguage,
  AppAction,
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

export const appReady = (boolean: boolean) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState
) => {
  dispatch(ready(boolean));
};

export const appChangeColors = (colors: Colors) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState
) => {
  dispatch(changeColor(colors));
};

export const appChangeLang = (lang: Lang) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState
) => {
  dispatch(changeLang(lang));
};

export const appChangeMode = (mode: Mode) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState
) => {
  dispatch(changeMode(mode));
};
